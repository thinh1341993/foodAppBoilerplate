import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color } from "../../theme"
import screens from "../../navigation/screens"
import { AuthContext } from "../../navigation"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1,
}

export const SignInScreen = observer(function SignInScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const { signIn } = React.useContext(AuthContext)

  const gotoApp = () => {
    signIn({
      token: "resp.token",
      role: "resp.user.type_user",
    })
  }
  return (
    <Screen style={ROOT} preset="scroll">
      <Text preset="header" text="05SignInScreen" />
      <Button text="login" onPress={gotoApp} />
    </Screen>
  )
})
