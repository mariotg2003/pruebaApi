import webbrowser
nombre=input("Introduce el nombre de usuario: ")
url = "http://127.0.0.1:3000/b.html?nombre="+nombre
webbrowser.open(url)