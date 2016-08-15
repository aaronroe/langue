defmodule Langue.PageController do
  use Langue.Web, :controller

  def index(conn, _params) do
    render conn, "index.html", api_token: conn.cookies["tapasha"], csrf_token: get_csrf_token()
  end

  def logout(conn, _params) do
    conn
    |> delete_resp_cookie("tapasha")
    |> redirect(to: "/")
  end

end
