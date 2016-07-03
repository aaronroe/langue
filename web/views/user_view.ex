defmodule Langue.UserView do
  use Langue.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Langue.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Langue.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      password: user.password,
      email: user.email}
  end
end
