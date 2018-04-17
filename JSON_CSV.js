function JSON_CSV(json_string){
    var prop_array = [];
    var map = [];
   	for (i = 0; i < json_string.length; i++) { 
            var aux = [];
            var object = json_string[i];
            for (const property in object) {
                uppercase_property = property.toUpperCase().trim().replace(/\s+/g, ' ');
                if (!prop_array.includes(uppercase_property)) {
                    prop_array.push(uppercase_property);
                }
                object[uppercase_property] = object[property];
                delete object[property];
            }
            for (const prop in object ) {
                var index = prop_array.indexOf(prop);
                aux[index] = object[prop];
            }
            map.push(aux.join(', '))
     }
     console.log(prop_array.join(', '));
     for (line in map) {
        console.log(map[line]);
     }
}

JSON_CSV([{"city":"Milano","Air  Quality":"red"," Temperature ":10},{"air       quality":"yellow","Temperature":20,"Sea conditions":3,"City":"Genova"}])


