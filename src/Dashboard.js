import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContnent";
import CardHeader from "@material-ui/core/CardHeader";

export default () => (
  <Card>
    <CardHeader title="Welcome to your dashboard app" />
    <CardContent>
      {" "}
      Here is where you're going to add info about your app{" "}
    </CardContent>
  </Card>
);
