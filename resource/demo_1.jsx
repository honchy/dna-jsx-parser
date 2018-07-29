<View
    style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    }}
>
    <View
        style={{
            marginTop: 44,
            padding: 20,
            backgroundColor: '#aafd9a'
        }}
    >
        <Text
            style={{
                fontSize: 20,
                textAlign: 'center',
            }}
        >
            {'这是一个Text！'}
        </Text>
        <Image
            style={{
                width: 192,
                height: 108,
            }}
            source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529518543906&di=de6a2e9c9de10b59cdcf5e08e6d001e5&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F09fa513d269759eec8566001bbfb43166c22dff2.jpg'}}
            resizeMode={'cover'}
        />
        <Text
            style={{
                marginTop: 10,
                fontSize: 20,
                textAlign: 'center',
            }}
        >
            {'上面是一个Image！'}
        </Text>
    </View>
    <View
        style={{
            height: 150,
            padding: 20,
            marginTop: 20,
            backgroundColor: '#aafd9a'
        }}
    >
        <ScrollView
            style={{
                backgroundColor: '#ffa0d0'
            }}
            contentContainerStyle={{

            }}
            removeClippedSubviews={true}
        >
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                {'这是第一个Text！'}
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                {'这是第二个Text！'}
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                {'这是第三个Text！'}
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    textAlign: 'center',
                }}
            >
                {'这是第四个Text！'}
            </Text>
        </ScrollView>
        <Text
            style={{
                fontSize: 20,
                textAlign: 'center',
            }}
        >
            上面是个ScrollView!
        </Text>
    </View>
    <View
        style={{
            padding: 20,
            marginTop: 20,
            backgroundColor: '#aafd9a'
        }}
    >
        <Button
            style={{
                marginTop: 20,
            }}
            onPress={() => {}}
            title="这是一个Button！"
            color="#841584"
        />
    </View>
    <View
        style={{
            padding: 20,
            marginTop: 20,
            backgroundColor: '#aafd9a',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Switch />
        <Text
            style={{
                marginTop: 10,
                fontSize: 20,
                textAlign: 'center',
            }}
        >
            {'上面是一个Switch！'}
        </Text>
    </View>
</View>
