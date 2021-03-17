import {StyleSheet} from 'react-native'
import Colors from '../../utils/Colors'
import commonStyles from '../../utils/commonStyles'
import Fonts from '../../utils/Fonts'


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        fontFamily:Fonts.PoppinsRegular,
    },
    title:{
        fontSize:20,
        color:Colors.themeDark
    },
    input:{
        ...commonStyles.shadow,
        width:'80%',
        fontSize:16,
        fontFamily:Fonts.PoppinsRegular,
        height:45,
        textAlignVertical:'center',
        backgroundColor:Colors.loginInputsBackgroundColor,
        borderRadius:5,
        paddingHorizontal:10,
        marginTop:10
    }
})