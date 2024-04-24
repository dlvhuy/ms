import { useState } from "react";
import { View,Button,Text,Modal } from "react-native";

export default function TestModel(){
    const [isModalVisible,setIsModelVisible] = useState(false);

    return(
        <View>
            <View style={{padding:100}}>
                <Button
                title="Press"
                onPress={() => setIsModelVisible(true)}
                color={'red'}
                />
            </View>
            <Modal 
                visible={isModalVisible}
                onRequestClose={() => setIsModelVisible(false)}
                animationType="slide"
            >
                <View style={{flex:1, backgroundColor:'yellow',padding:60}}>
                    <Text>Modal Content</Text>
                    <Button
                    title="Close"
                    onPress={() => setIsModelVisible(false)}
                    color={'blue'}
                    >

                    </Button>
                </View>
            </Modal>
        </View>
    )
}