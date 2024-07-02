import { View, Image, Text } from "react-native"
import { PlusCircleIcon } from "react-native-heroicons/outline"


export default function Product({ name, description, price, image, isListView }){
    
    return (
        
        <View style={{ width: isListView ? '100%' : 155, height: isListView ? 150 : undefined, marginBottom: 20 }}>
            {   
                !isListView &&
                <View style={{ width: '100%' }}>
                    <View style={{ position: 'relative', marginBottom: 10 }}>
                        <Image
                            source={image} 
                            style={{ width: '100%', height: undefined, aspectRatio: 0.5}}
                        />
                        <PlusCircleIcon 
                            style={{ position: 'absolute', bottom: 10, right: 10 }} 
                            color={'black'} 
                            size={20} 
                            />
                    </View>
                    <View style={{ display: 'flex', gap: 5}}>
                        <Text style={{ fontSize: 20 }}>{name}</Text>
                        <Text style={{ color: 'grey' }}>{description}</Text>
                        <Text style={{ color: 'orange', fontSize: 20 }}>${price}</Text>
                    </View>
                </View>
            }
            {
                isListView && 
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                    <Image
                        source={image} 
                        style={{ 
                            width: undefined, 
                            height: '100%', 
                            aspectRatio: 1,
                            objectFit: 'contain'
                        }}
                    />
                    <View style={{ display: 'flex', gap: 5 }}>
                        <Text style={{ fontSize: 20 }}>{name}</Text>
                        <Text style={{ color: 'grey' }}>{description}</Text>
                        <Text style={{ color: 'orange', fontSize: 20 }}>${price}</Text>
                        <PlusCircleIcon 
                            color={'black'} 
                            size={20} 
                            />
                    </View>
                </View>
            }
        </View>
    )
}