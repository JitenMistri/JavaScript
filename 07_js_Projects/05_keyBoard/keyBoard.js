const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th> 
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>     // if we press space, it was not printing anything, thats why the check is there that is space is comming, then space will be printed
                <td>${e.keyCode}</td> 
                <td>${e.code}</td>
            </tr>
            
        </table>
    </div>
  `;
});
