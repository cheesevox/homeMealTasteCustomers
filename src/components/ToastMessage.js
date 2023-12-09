import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, forwardRef, useImperativeHandle } from 'react';

const ToastMessage = forwardRef(({ type = 'fail', text, description, timeout =1000 }, ref) => {

    const [isVisible, setIsVisible] = useState(false);

    const showToast = () => {
        setIsVisible(true);
        const timer = setTimeout(()=>{
            setIsVisible(false);
            clearTimeout(timer);
        }, timeout)
    }

    useImperativeHandle(ref, () => ({
        show:showToast
    }))

    const LOGIN_TYPE = {
        success: {
            backgroundColor: '#2ecc71',
        },
        fail: {
            backgroundColor: '#e74c3c'
        }
    }

    const backlor = LOGIN_TYPE[type].backgroundColor;

    return (
        <>

            { isVisible && <View style={{
                position: 'absolute',
                top: 50,
                width: '90%',
                height: 100,
                backgroundColor: backlor,
                borderRadius: 10,
                padding: 12,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                    height: 2,
                    width: 0,
                },
                shadowRadius: 3.84,
                shadowOpacity: 0.25,
                elevation: 5
            }}
            >
                <FontAwesome5
                    size={40}
                    color='#FFF'
                />
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#FFF' }}>
                        {text}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#FFF' }}>
                        {description}
                    </Text>
                </View>
            </View>}
        </>

    )
});
export default ToastMessage