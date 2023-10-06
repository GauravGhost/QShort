import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fetch } from "../../../lib/api";
import QSnackbar from "../snackbar/snackbar";
import { Typography } from "@mui/material";

const Redirect = () => {

  const navigate = useNavigate();
  const { url } = useParams();

  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState({});

  useEffect(() => {
    fetchOriginalUrl();
  }, [url])

  const fetchOriginalUrl = async () => {
    const response = await fetch(url);
    if (response.success) {
      window.location.href = response.data;
    }
    else if (!response.success) {
      setOpen(true);
      setBar({ text: "Please Enter Correct Short url", variant: 'error' })
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } else {
      setOpen(true);
      setBar({ text: "Server Error, Server is Starting, please wait!", variant: 'error' })
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }
  return (
    <div>
      <Typography variant="h5">
        Redirecting...
      </Typography>
      <QSnackbar open={open} setOpen={setOpen} bar={bar} />
    </div>
  )
}

export default Redirect;