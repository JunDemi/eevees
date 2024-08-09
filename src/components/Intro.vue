<template>
    <div class="intro">
        <img :src="'/src/static/3D_Models/' + sendPokemon + '.gif'" />
        <div class="pokemon-name">
            <h2>{{ sendPokemon}}</h2>
            <p>진화포켓몬</p>
        </div>
    </div>
</template>
<script>
// useEffect(() => {
//   const fetchData = async () => {
//     const allPokemonData = [];
//     for (let i = 1; i <= 151; i++) {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
//       const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
//       const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko');
//       allPokemonData.push({ ...response.data, korean_name: koreanName.name });
//     }
//     setPokemonData(allPokemonData);
//   };

//   fetchData();
// }, []);
export default {
    props: {
        sendPokemon: String,
    },
    //데이터가 변화할때를 감지
    watch: {
        sendPokemon: { //부모 컴포넌트에서 전달받은 props가 변화할 때
            immediate: true, // 컴포넌트가 처음 렌더링될 때도 실행
            handler(sendName) { //핸들러의 매개변수 = props
                this.getPokemonData(sendName);
            }
        }
    },
    data() {
        return {
            pokemonName: {}
        }
    },
    methods: {
        //이름 포맷 (이브이 -> eevee)
        nameFormat(sendName) {
            switch (sendName) {
                case "이브이":
                    return "eevee"
                case "샤미드":
                    return "vaporeon"
                case "쥬피썬더":
                    return "jolteon"
                case "부스터":
                    return "flareon"
                case "에브이":
                    return "espeon"
                case "블래키":
                    return "umbreon"
                case "리피아":
                    return "leafeon"
                case "글레이시아":
                    return "glaceon"
                case "님피아":
                    return "sylveon"
            }
        },
        //fetch메소드
        getPokemonData(sendName) {
            fetch(`${import.meta.env.VITE_BASE_URL}/${this.nameFormat(sendName)}`)
                .then(response => response.json())
                .then(data => this.pokemonName = data)
        },
    }
}
</script>
<style></style>