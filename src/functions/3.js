//rest parameters

function showName(firstName, lastName, ...rest /*, no need for another parameter*/) {
    console.log(firstName + ' ' + lastName + ' - ' + rest);
}

// выведет: Юлий Цезарь - Император,Рима
showName("Arya", "Stark", "younger", "of the daughters");