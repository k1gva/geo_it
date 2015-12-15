function speichern() {
    console.log('Hier kommt dann mal ein POST-Request');
    
    $.ajax({
        
        url: './img/',
        type: 'POST',
        data: data,
        
        
    })
    
}