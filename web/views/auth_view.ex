defmodule Langue.AuthView do
    use Langue.Web, :view

    def render("show.json", %{api_token: api_token}) do
        %{api_token: api_token}
    end
end