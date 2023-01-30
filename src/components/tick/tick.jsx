import React from "react";
import { TouchableOpacity, Text, Touchable } from 'react-native'

const addTick = ({item, onHandlerTick}) => {
    return (
        <TouchableOpacity onPress={() => onHandlerTick(item)}>
            <Text>Tarea marcada</Text>
        </TouchableOpacity>
    )
}

export default addTick


