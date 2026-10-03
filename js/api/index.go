package handler

import (
	"fmt"
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    // Example response logic:
    w.WriteHeader(http.StatusOK)
    fmt.Fprintf(w, `{"status": "ok", "message": "Go API running on Vercel"}`)
}