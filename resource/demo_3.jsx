<TouchableOpacity
    onPress={() => {
        // 点击跳转scheme
    }}
    activeOpacity={1}
>
    <View style={{
        flexDirection: 'column',
        paddingTop: 10,
        backgroundColor: '#ffffff',
        width: 375
    }}>
        <View style={{
            position: 'relative',
            flexDirection: 'row',
            paddingHorizontal: 10,
        }}>
            <Image
                style={{
                    flexShrink: 1,
                    width: 100,
                    height: 100,
                    marginRight: 10,
                }}
                source={{uri: 'https://imgs.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_150x150_8a63d940.jpg'}}
                resizeMode={'cover'}
            />
            <View style={{
                flexDirection: 'column',
                flexGrow: 1,
            }}>
                <Text style={{
                    marginTop: 3,
                    fontSize: 18,
                    color: '#212121'
                }}>
                    {'水立方'}
                </Text>
                <Text style={{
                    marginTop: 10,
                    fontSize: 12,
                    color: '#616161'
                }}>
                    {'3225条评论'}
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginTop: 5,
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: '#616161'
                    }}>
                        <Text style={{
                            fontSize: 10,
                            color: '#ff8300'
                        }}>
                            {'¥'}
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            color: '#ff8300'
                        }}>
                            {'25'}
                        </Text>
                        {'起'}
                    </Text>
                    <Text style={{
                        color: '#616161',
                        fontSize: 12,
                    }}>
                        {'奥利匹克公园'}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 5,
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 5,
                        borderWidth: 0.5,
                        borderRadius: 2,
                        borderColor: '#ff1200',
                        padding: 2,
                    }}>
                        <Text style={{
                            color: '#ff1200',
                            fontSize: 11,
                        }}>
                            {'券减9'}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 5,
                        borderWidth: 0.5,
                        borderRadius: 2,
                        borderColor: '#00afc7',
                        padding: 2,
                    }}>
                        <Text style={{
                            color: '#00afc7',
                            fontSize: 11,
                        }}>
                            {'必游景点'}
                        </Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 2,
                        backgroundColor: '#a5e4ec',
                        padding: 2,
                    }}>
                        <Text style={{
                            color: '#00afc7',
                            fontSize: 11,
                        }}>
                            {'游泳排名第一'}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{
                position: 'absolute',
                left: 10,
                width: 51,
                height: 19,
            }}>
                <Image
                    style={{
                        position: 'absolute',
                        width: 51,
                        height: 19,
                    }}
                    source={{uri: 'https://img1.qunarzz.com/piao/fusion/1804/81/c1672f32b62a8402.png'}}
                />
            </View>
        </View>
        <View style={{
            backgroundColor: '#e0e0e0',
            width: 365,
            height: 0.5,
            marginTop: 10,
            marginLeft: 10,
        }}/>
    </View>
</TouchableOpacity>