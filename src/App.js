import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
