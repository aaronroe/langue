defmodule Langue.AuthController do
  use Langue.Web, :controller

  plug Ueberauth

  alias Langue.User
  alias Ueberauth.Auth
  alias Ueberauth.Auth.Credentials

  def unauthenticated(conn, _params) do
    conn
    |> put_status(401)
    |> put_view(Langue.ErrorView)
    |> render("error.json", message: "Authentication required")
  end

  def identity_callback(%{assigns: %{ueberauth_auth: %Auth{provider: :identity, uid: email, credentials: %Credentials{other: %{password: password}}}}} = conn, _params) do
    user = Repo.get_by(User, email: String.downcase(email))
    case User.validate_login(user, password) do
      :ok ->
       new_conn = Guardian.Plug.api_sign_in(conn, user)
       jwt = Guardian.Plug.current_token(new_conn)
       {:ok, claims} = Guardian.Plug.claims(new_conn)
       exp = Map.get(claims, "exp")

       new_conn
       |> put_resp_cookie("tapasha", "#{jwt}")
       |> put_resp_header("X-Expires", Integer.to_string(exp))
       |> put_flash(:info, "you did it, dawg!")
       |> put_view(Langue.PageView)
       |> render("index.html")
      :error ->
        conn
        |> put_status(401)
        |> put_view(Langue.ErrorView)
        |> render("error.json", message: "Invalid Credentials")
    end
  end

end
