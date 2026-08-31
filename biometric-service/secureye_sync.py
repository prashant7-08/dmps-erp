"""
=============================================================================
  SECUREYE S-FB3K DUAL CLOUD SERVER & LAN PUSH SERVICE
  Model: Secureye S-FB3K (IP Face & Fingerprint Reader)
  FK Web Server Port: 5005 | TCP/IP Port: 4370
  Author: Prashant Rajput
=============================================================================
"""

import http.server
import socketserver
import threading
import json
import os
import sys
import time
from datetime import datetime

HTTP_PORT = 5005
SOCKET_PORT = 4370
MACHINE_IP = "192.168.31.43"
OUTPUT_FILE = os.path.join(os.path.dirname(__file__), "..", "public", "live_biometric_punches.json")

print("=" * 70)
print("  SECUREYE S-FB3K REALTIME FK-WEB & CLOUD SYNC SERVER")
print("  Dadheech Memorial Public School - Aligarh / Jargwan")
print("=" * 70)
print(f"[*] Local Server Port  : {HTTP_PORT} (FK Web Cloud Push Listener)")
print(f"[*] Target Machine IP  : {MACHINE_IP}")
print(f"[*] Sync Output File   : {OUTPUT_FILE}")
print("-" * 70)

class SecureyeFKWebHandler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format, *args):
        # Custom clean logger
        sys.stdout.write(f"[{datetime.now().strftime('%H:%M:%S')}] 📡 Machine Request: {args[0]} - {args[1]}\n")

    def do_GET(self):
        # Handshake response to clear the red cross on machine screen
        self.send_response(200)
        self.send_header('Content-Type', 'text/plain; charset=utf-8')
        self.send_header('Connection', 'close')
        self.end_headers()
        self.wfile.write(b"OK")
        print(f"[{datetime.now().strftime('%H:%M:%S')}] 🟢 Handshake OK sent to Secureye S-FB3K! Red cross cleared.")

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8', errors='ignore')
        
        print(f"[{datetime.now().strftime('%H:%M:%S')}] 📥 Live Punch Received from Machine: {post_data[:120]}")
        
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"ret":1,"result":"OK"}')

def start_http_server():
    try:
        with socketserver.TCPServer(("", HTTP_PORT), SecureyeFKWebHandler) as httpd:
            print(f"[+] 🚀 FK Web Cloud Server is ACTIVE on port {HTTP_PORT}!")
            print(f"[+] Waiting for Secureye S-FB3K ({MACHINE_IP}) connection...\n")
            httpd.serve_forever()
    except Exception as e:
        print(f"[!] Server Error on port {HTTP_PORT}: {e}")

if __name__ == "__main__":
    t = threading.Thread(target=start_http_server, daemon=True)
    t.start()

    print("[+] Background Service Running. Keep this window open while taking attendance.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[*] Service stopped.")
