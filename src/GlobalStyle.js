import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    overflow-x: hidden;
    background:#303030;
    color:#ebebeb;
    font-family: 'Courier New', Courier, monospace;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}

.App{
    overflow-x: hidden;
}
`