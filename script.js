 function buscarPokemon() {
            // Obtener el nombre del Pokémon desde el cuadro de texto
            var nombrePokemon = document.getElementById("searchInput").value.toLowerCase();

            // Construir la URL de la API REST de Pokémon 	
            var url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

            // Realizar la solicitud a la API utilizando fetch
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Mostrar los resultados en el div de resultado
                    mostrarResultado(data);
                })
                .catch(error => {
                    // Manejar errores
                    console.error("Error al buscar el Pokémon:", error);
					mostrarResultadoError();
                });
        }

		// Funcion para mostrar con resultado correcto
        function mostrarResultado(data) {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<h1> Nombre: ${data.name}</h1>`;

            for (let index = 0; index < data.types.length; index++) {
                resultDiv.innerHTML += `<p> Tipo: ${data.types[index].type.name}</p>`;
                
            }  

            for (let index = 0; index < 4; index++) {
                resultDiv.innerHTML += `<p> Ataque ${[index+1]}: ${data.moves[index].move.name}</p>`;
                
            }   

            resultDiv.innerHTML += `<img src="${data.sprites.front_default}" alt="${data.name}">`;
        }

		// Funcion para mostrar en caso de error
		function mostrarResultadoError(){
			var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<h2>Error en la búsqueda! Espero que no seas del Team Rocket...</h2>`;
			alert("Error en la búsqueda! Espero que no seas del Team Rocket...");
		}