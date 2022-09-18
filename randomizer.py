import urllib.parse
if __name__ == '__main__':
	base = 'https://faustandlaluna.github.io/un_red.html?'
	redirect = []
	print('Este programa genera una URL para la cual puedes redireccionar el tráfico de manera aleatoria.')
	temp = input(f'Dame la URL número {len(redirect) +1}\n')
	temp = urllib.parse.quote_plus(temp)
	redirect.append(temp)
	while(True):
		flag = input("Quieres Añadir Otra Url? (SI o NO)\n")
		if flag.lower() == 'no':
			break
		temp = input(f'Dame la URL número {len(redirect) +1}\n')
		temp = urllib.parse.quote_plus(temp)
		redirect.append(temp)
	ans = base
	for i in range(0, len(redirect)):
		if i == 0:
			ans += f"{i}={redirect[i]}"
		else:
			ans += f"&{i}={redirect[i]}"
	print("========================================================")
	print("========================================================")
	print("========================================================")
	print("========================================================")
	print(ans)

	