import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-native'

import login from './Pages/Login'
import cadastroUsuario from './Pages/CadastroUsuario'

const Routes = createAppContainer(
    createSwitchNavigator({
        login,
        cadastroUsuario
    })
);

export default Routes;