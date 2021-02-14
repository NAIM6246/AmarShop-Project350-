package main

import (
	"AmarShop/config"
	"AmarShop/conn"
	"AmarShop/handler"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

func main() {
	port := ":8080"
	router := chi.NewRouter()
	//rout for user
	userHandler := handler.NewUserHandler()
	router.Route("/users", userHandler.Handle)
	//rout for login
	loginHandler := handler.NewLoginHandler()
	router.Route("/login", loginHandler.Handler)
	//rout for product
	productHandler := handler.NewProductHandler()
	router.Route("/product", productHandler.PHandler)
	//rout for home
	homeHandler := handler.NewHomeHandler()
	router.Route("/home", homeHandler.HomeHandler)
	//rout for orders
	orderHandler := handler.NewOrderHandler()
	router.Route("/order", orderHandler.OrderHandle)
	cartHandler := handler.NewCartHandler()
	router.Route("/cart", cartHandler.CartHandle)
	fmt.Println("Creating a server on port ", port)

	config := config.NewDBConfig()
	connection := conn.ConnectDB(config)
	connection.Migration()
	defer connection.Close()
	http.ListenAndServe(port, router)
}