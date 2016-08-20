defmodule Langue.Router do
  use Langue.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :protect_from_forgery
  end

  pipeline :api_auth do
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
    plug Guardian.Plug.EnsureAuthenticated, handler: Langue.AuthController
  end

  scope "/", Langue do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/register", PageController, :index
    get "/login", PageController, :index
    get "/new-session", PageController, :index
    get "/logout", PageController, :logout
  end

  scope "/new-session", Langue do
    pipe_through :browser # Use the default browser stack

    get "/exchange", PageController, :index
    get "/practice", PageController, :index
  end

  scope "/auth", Langue do
    pipe_through :browser

    get "/:provider", AuthController, :request
    get "/:provider/callback", AuthController, :callback
    post "/identity/callback", AuthController, :identity_callback
  end

  scope "/api", Langue do
    pipe_through [:api, :api_auth]

    resources "/users", UserController, except: [:new, :edit, :create]
  end

  scope "/api", Langue do
    pipe_through [:api]

    resources "/users", UserController, only: [:create]
  end
end
