import { useContext } from "react"
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const { message } = useContext(NotificationContext)

  if (!message.message) {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    <div style={style}>
      {message.message}
    </div>
  )
}


export default Notification
