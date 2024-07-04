import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { CSSProperties } from "react";

const HowItWorks = () => {
  const { token } = theme.useToken();

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: <b className="text-xl">How to setup your business</b>,
      children: (
        <p className="text-justify leading-loose">
          After sign up, Click on the "Business Settings" and provide
          information about your Business. This information includes your
          Business Name, Business Type, Industry and Bank Information (to enable
          us carry out settlements appropriately). In the document section, you
          can also upload your business logo to help give your brand an
          identity.
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: <b className="text-xl">How to add and manage product</b>,
      children: (
        <div className="text-justify leading-loose">
          To create a product, follow the step below: <br /><br /> 1. Click “Products” on the
          left side navigation <br /><br /> 2. Click "Create Product" <br /><br /> 3. Input Product
          Information <br />&emsp;&emsp; a. Enter Product Name (This will be used as the Custom
          Link) <br />&emsp;&emsp; b. Enter the Amount (If you want a Fixed Amount) <br />&emsp;&emsp; c. Enter a
          brief description (if any) <br /><br /><br /> 4. Click "Generate Link" Once done, you'll
          have your link generated and the product listed on the product list
          table, where you can copy the link and share with your customers.
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: <b className="text-xl">How to add and manage users</b>,
      children: (
        <div className="text-justify leading-loose">
          To add a user, follow the steps below: <br /><br /> 1. Click “My Users” on the left
          side navigation  <br /> <br />2. Click "Add New User" <br /><br /> 3. Input required Information
           <br /> &emsp; &emsp; a. Enter User's Full Name <br /> &emsp; &emsp; b. Enter User's Phone Number <br /> &emsp; &emsp; c. Enter User's
          Email Address <br /> &emsp; &emsp;  d. Select Desired user Role <br /> <br /><br /> 4. Click "create user" Once
          done, your user would be notified and required to login with the
          credentials you provided. To manage user, simply click on the "Open"
          button on the user table.
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: <b className="text-xl">How to manage transactions and settlement</b>,
      children: (
        <p className="text-justify leading-loose">
          The transaction menu would help you monitor sales and transactions
          done within your store. This table would show you information that
          includes transaction ID, transaction type, status and more. You can
          also click on the "Open" button to view more details of each
          transaction.
        </p>
      ),
      style: panelStyle,
    },
  ];

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "1px solid #566b30",
    borderLeft: "10px solid #566b30",
    padding: 10,
    boxShadow: "0px 4px 4px #00000015"
  };

  return (
    <div className="px-5 lg:px-20 py-20 lg:w-[75%] mx-auto">
      <h1 className="font-bold text-[1.5rem] sm:text-[2.5rem] text-center lg:text-[3rem] mb-5">
        How It Works
      </h1>
      <p className="font-thin leading-loose text-center">
        Here Is A Guide To Help You understand how Rexpay works. This guide will
        help you Carry Out Some Of The Most Important Activities On The
        Platform.
      </p>
      <div className="mt-20">
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{ background: token.colorBgContainer }}
          items={getItems(panelStyle)}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
