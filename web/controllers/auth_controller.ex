defmodule Langue.AuthController do
  use Langue.Web, :controller

  def unauthenticated(conn, _params) do
    conn
    |> put_status(401)
    |> put_view(Langue.ErrorView)
    |> render("error.json", message: "Authentication required")
  end

end
