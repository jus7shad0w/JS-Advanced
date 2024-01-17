function townPopulation(input) {
    let result = {};
    for (let line of input) {
        let tokens = line.split(` <-> `);
        let name = tokens[0];
        let population = Number(tokens[1]);
        if (result.hasOwnProperty(name)) {
            result[name] += population;
        } else {
            result[name] = population;
        }
    }
    for (name in result) {

        console.log(name, ':', result[name]);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])