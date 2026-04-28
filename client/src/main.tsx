import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WebSocket from 'isomorphic-ws';

export const ws = new WebSocket("ws://localhost:8080/")

ws.onopen = () => console.log("connection opened")

createRoot(document.getElementById('root')!).render(
    <App />
)
