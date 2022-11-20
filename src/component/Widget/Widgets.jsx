import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
export default function Widgets({ type }) {
  let data;
  //temp
  const amount = 100;
  const diff = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMOney: false,
        link: "see all users",
        icon: <PersonOutlinedIcon className="icon" style={{color:"crimson"}} />,
      };
      break;

    case "order":
      data = {
        title: "ORDERS",
        isMOney: false,
        link: "see all users",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{color:"crimson"}} />,
      };
      break;

    case "earning":
      data = {
        title: "EARNINGS",
        isMOney: true,
        link: "view net earnings",
        icon: <MonetizationOnOutlinedIcon style={{color:"crimson"}} className="icon" />,
      };
      break;

    case "balance":
      data = {
        title: "BALANCES",
        isMOney: true,
        link: "see details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"crimson"}}/>,
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMOney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}
