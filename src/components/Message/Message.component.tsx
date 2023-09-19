import MessageStyle from "./Message.module.scss";

interface MessagePropsModel {
  type: "NO_DATA" | "ERROR";
  message?: string;
}

export const Message = ({ type, message }: MessagePropsModel) => {
  return (
    <div className={MessageStyle.message}>
      {type === "NO_DATA" && (
        <p className={MessageStyle.message__noData}>{message}</p>
      )}
      {type === "ERROR" && (
        <p className={MessageStyle.message__error}>{message}</p>
      )}
    </div>
  );
};
