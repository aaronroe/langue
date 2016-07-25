defmodule Langue.PageController do
  use Langue.Web, :controller

  def index(conn, _params) do
    render conn, "index.html", api_token: conn.cookies["tapasha"], csrf_token: conn.cookies["csrftoken"]
  end
end
