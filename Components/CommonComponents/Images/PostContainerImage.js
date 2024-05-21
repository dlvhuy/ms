import { Image, StyleSheet, View } from "react-native"
const Col = ({ numRows, children }) => {
    return  (
      <View style={stylePostContainerImage[`${numRows}col`]}>{children}</View>
    )
  }
  const Row = ({ children }) => (
    <View style={stylePostContainerImage.row}>{children}</View>
  )
export const PostContainerImage = () =>{
    const image = require("../../../assets/adaptive-icon.png")
    return(
        <View style={stylePostContainerImage.PostContainerImageContainer}>
            <Row>

            <Col numRows={2}>
                <Image style={stylePostContainerImage.ImageContent} source={image}/>
            </Col>
            <Col numRows={2} >
                <Image style={stylePostContainerImage.ImageContent} source={image}/>
            </Col>
            </Row>
        </View>
    )
}
const stylePostContainerImage = StyleSheet.create({
    PostContainerImageContainer:{
        flex:2,
        flexDirection:"column",
        gap:8
    },
    ImageContent:{
        marginTop:15,
        width:"100%",
        height:400,
        gap:8
    },
    row: {
        flexDirection: "row"
      },
    "1col":  {
        backgroundColor:  "lightblue",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  1
      },
      "2col":  {
        backgroundColor:  "green",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  2
      },
      "3col":  {
        backgroundColor:  "orange",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  3
      },
      "4col":  {
        flex:  4
      }
})