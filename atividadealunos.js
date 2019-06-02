var alunos = ["Matheus", "João Vitor", "Gabriel", "André", "Raynara", "Rebecca", "Edgard", "Israel", "Naedson", "Wanderson"]

var num_aleatorio = Math . random() * alunos.length

var sorteado = Math.round(num_aleatorio)

console.log("Sorteado:" + alunos[sorteado-1])
