function myFunction() {
    document.getElementById( "myDropdown" ).classList.toggle( "show" );
}

window.onclick = function ( event ) {
    if ( !event.target.matches( '.dropbtn' ) ) {
        var dropdowns = document.getElementsByClassName( "dropdown-content" );
        var i;
        for ( i = 0; i < dropdowns.length; i++ ) {
            var openDropdown = dropdowns[ i ];
            if ( openDropdown.classList.contains( 'show' ) ) {
                openDropdown.classList.remove( 'show' );
            }
        }
    }
}
var no_of_apps = document.querySelectorAll( ".app" ).length;
for ( var i = 0; i < no_of_apps; i++ ) {
    document.querySelectorAll( ".app" )[ i ].addEventListener( "click", handleClick );
    function handleClick() {
        console.log( this );
        document.getElementById( "payTitle" ).innerHTML = this.innerHTML;
    }
}

// + "<i class=\"fas fa-caret-down drop-icon\"></i>"