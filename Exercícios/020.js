serie = {
    titulo: 'Doctor Who (2005-2022)',
    diretor: 'Diversos',
    genero: 'Ficção Científica',
    anoLancamento: '2005',
    nrTemporadas: 13,
    episodios: [
        {
            temporada: 4,
            nrEpisodio: 10,
            titulo: 'Midnight',
            diretor: 'Alice Troughton',
            duracao: '45 mins'
        },
        {
            temporada: 9,
            nrEpisodio: 11,
            titulo: 'Heaven Sent',
            diretor: 'Rachel Talalay',
            duracao: '54 mins'
        },
        {
            temporada: 13,
            nrEpisodio: 'Especial 2022',
            titulo: 'The Power of The Doctor',
            diretor: 'Jamie Magnus Stone',
            duracao: '87 mins'
        }
    ]
}

console.log(`Episódio ${serie.episodios[1].nrEpisodio} | Título: ${serie.episodios[1].titulo} | Duração: ${serie.episodios[1].duracao}`);