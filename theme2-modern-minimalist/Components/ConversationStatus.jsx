<div
  className={`conversations-list-item-status conversations-${status}StatusBackgroundColor ${status}`}
  style={{
    backgroundColor: status === "done"
      ? _.get(data, "doneStatusBackgroundColor.value") 
      : _.get(data,"openStatusBackgroundColor.value"),
  }}
  >
  <span
    className={`conversations-${status}StatusTextColor`}
    style={{
      color: status === "done" ?  _.get(data, "doneStatusTextColor.value") : _.get(data, "openStatusTextColor.value"),
    }}
  >
    {status}
  </span>
</div>