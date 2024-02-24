import React from "react";

import { Button, Img, Line, Switch, Text } from "components";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-circularstd items-center justify-start mx-auto pb-[22px] w-full">
        <div className="sm:h-[1222px] md:h-[1837px] h-[1879px] md:px-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[6%] w-[84%]">
            <div className="flex flex-col md:gap-10 gap-[81px] justify-start w-full">
              <Text
                className="leading-[70.00px] md:ml-[0] ml-[606px] sm:text-[41px] md:text-[47px] text-[55px] text-blue_gray-900 text-center"
                size="txtCircularStdBold55"
              >
                <>
                  Your eCommerce <br />
                  made simple
                </>
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[23px] items-end justify-start w-[34%] md:w-full">
                  <div className="md:h-[293px] h-[322px] relative w-full">
                    <Img
                      className="absolute h-[293px] object-cover right-[0] rounded-[20px] top-[0] w-[81%]"
                      src="images/img_rectangle223.png"
                      alt="rectangle223"
                    />
                    <Img
                      className="absolute h-12 left-[4%] object-cover top-[2%] w-[13%]"
                      src="images/img_kisspngapplep.png"
                      alt="kisspngapplep"
                    />
                    <Img
                      className="absolute bottom-[0] h-[264px] left-[0] object-cover rounded-[10px] w-[38%]"
                      src="images/img_image16.png"
                      alt="imageSixteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                      size="txtCircularStdBold36"
                    >
                      All You Need to Start
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-4 text-blue_gray-300 text-lg w-full"
                      size="txtRobotoRegular18"
                    >
                      Add WooCommerce plugin to any WordPress site and set up a
                      new store in minutes.
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-7 text-blue_gray-300 text-lg"
                      size="txtRobotoRegular18"
                    >
                      <span className="text-blue-500 font-roboto text-left font-bold">
                        Ecommerce for Wordpress{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-blue-500 font-roboto text-left text-[22px] font-bold">
                        ›
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-8 w-[27%] md:w-full">
                  <div className="md:h-[294px] h-[360px] relative w-full">
                    <div className="absolute bottom-[7%] h-[294px] inset-x-[0] mx-auto w-full">
                      <Img
                        className="h-[294px] m-auto object-cover rounded-[20px] w-full"
                        src="images/img_rectangle224.png"
                        alt="rectangle224"
                      />
                      <div className="absolute flex flex-col gap-6 inset-x-[0] justify-start mx-auto top-[6%] w-[81%]">
                        <Img
                          className="h-[69px] md:h-auto md:ml-[0] ml-[241px] object-cover rounded-[10px] w-[31%]"
                          src="images/img_image18.png"
                          alt="imageEighteen"
                        />
                        <div className="flex flex-row gap-[76px] items-start justify-start mr-[60px] w-[83%] md:w-full">
                          <Img
                            className="h-[69px] md:h-auto mb-[22px] object-cover rounded-[10px] w-[37%]"
                            src="images/img_image19.png"
                            alt="imageNineteen"
                          />
                          <Img
                            className="h-[69px] md:h-auto mt-[22px] object-cover rounded-[10px] w-[37%]"
                            src="images/img_image22.png"
                            alt="imageTwentyTwo"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col md:gap-10 gap-[223px] h-full inset-y-[0] justify-start left-[11%] my-auto w-[49%]">
                      <Img
                        className="h-[68px] md:h-auto mr-[105px] object-cover rounded-[10px] w-1/2"
                        src="images/img_image17.png"
                        alt="imageSeventeen"
                      />
                      <Img
                        className="h-[69px] md:h-auto md:ml-[0] ml-[105px] object-cover rounded-[10px] w-1/2"
                        src="images/img_image20.png"
                        alt="imageTwenty"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[27px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                    size="txtCircularStdBold36"
                  >
                    Customize and Extend
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-4 text-blue_gray-300 text-lg w-full"
                    size="txtRobotoRegular18"
                  >
                    From subscriptions to gym classes to luxury cars,
                    WooCommerce is fully customizable.
                  </Text>
                  <Text
                    className="mt-[27px] text-blue_gray-300 text-lg"
                    size="txtRobotoRegular18"
                  >
                    <span className="text-blue-500 font-roboto text-left font-bold">
                      Browse Extensions{" "}
                    </span>
                    <span className="md:text-xl sm:text-lg text-blue-500 font-roboto text-left text-[22px] font-bold">
                      ›
                    </span>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[17px] w-[31%] md:w-full">
                  <Img
                    className="h-[77px] md:h-auto md:ml-[0] ml-[268px] object-cover rounded-[10px] w-[24%]"
                    src="images/img_rectangle228.png"
                    alt="rectangle228"
                  />
                  <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                    <div className="md:h-[293px] h-[344px] relative w-full">
                      <Img
                        className="absolute bottom-[0] h-[293px] left-[0] object-cover rounded-[20px] w-[87%]"
                        src="images/img_rectangle225.png"
                        alt="rectangle225"
                      />
                      <Img
                        className="absolute bottom-[18%] h-[116px] object-cover right-[0] rounded-[10px] w-[35%]"
                        src="images/img_rectangle226.png"
                        alt="rectangle226"
                      />
                      <Img
                        className="absolute h-[95px] left-[6%] object-cover rounded-[10px] top-[0] w-[29%]"
                        src="images/img_rectangle227.png"
                        alt="rectangle227"
                      />
                    </div>
                    <Text
                      className="mt-[54px] text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                      size="txtCircularStdBold36"
                    >
                      Active Community
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[13px] text-blue_gray-300 text-lg w-[87%] sm:w-full"
                      size="txtRobotoRegular18"
                    >
                      WooCommerce is one of the fastest-growing eCommerce
                      communities.{" "}
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[27px] text-blue_gray-300 text-lg"
                      size="txtRobotoRegular18"
                    >
                      <span className="text-blue-500 font-roboto text-left font-bold">
                        Check our Forums{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-blue-500 font-roboto text-left text-[22px] font-bold">
                        ›
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute font-roboto h-[1188px] sm:h-[1222px] inset-x-[0] mx-auto top-[0] w-full">
            <div className="h-[1188px] sm:h-[1222px] m-auto w-full">
              <div className="bg-gradient  flex flex-col h-full items-start justify-end m-auto p-[216px] md:px-10 sm:px-5 w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start mb-[235px] mt-[368px] w-[49%] md:w-full">
                  <Text
                    className="leading-[25.00px] ml-1 md:ml-[0] text-blue_gray-300 text-lg"
                    size="txtRobotoRegular18"
                  >
                    <>
                      WooCommerce is a customizable, open-source eCommerce
                      platform built on WordPress. <br />
                      Get started quickly and make your way.
                    </>
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-[67%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[267px] rounded-[36px] text-center text-lg"
                      color="deep_purple_A200"
                      size="lg"
                    >
                      Start a New Store
                    </Button>
                    <Text
                      className="text-blue_gray-300 text-lg"
                      size="txtRobotoRegular18"
                    >
                      <span className="text-blue_gray-300 font-roboto text-left font-normal">
                        or{" "}
                      </span>
                      <span className="text-blue-500 font-roboto text-left font-bold">
                        Customize & Extend{" "}
                      </span>
                      <span className="md:text-xl sm:text-lg text-blue-500 font-roboto text-left text-[22px] font-bold">
                        ›
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col font-circularstd h-[1087px] items-end justify-end md:pl-10 sm:pl-5 pl-[78px] py-[78px] right-[0] top-[0] w-[51%]"
                style={{ backgroundImage: "url('images/img_group16.png')" }}
              >
                <div className="md:h-[1026px] h-[829px] sm:h-[955px] mt-[100px] relative w-[95%] md:w-full">
                  <div className="md:h-[664px] h-[829px] sm:h-[855px] m-auto w-full">
                    <div className="md:h-[664px] h-[829px] sm:h-[855px] m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-[53px] items-start justify-between w-full">
                          <Img
                            className="h-[250px]"
                            src="images/img_group7.svg"
                            alt="groupSeven"
                          />
                          <Img
                            className="h-[552px] md:h-auto sm:mt-0 mt-[111px] object-cover"
                            src="images/img_group5.png"
                            alt="groupFive"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute h-[552px] right-[19%] top-[0]"
                        src="images/img_group8.svg"
                        alt="groupEight"
                      />
                    </div>
                    <div className="absolute h-[421px] right-[0] top-[17%] w-[86%] md:w-full">
                      <div className="absolute bg-white-A700 border border-blue-50 border-solid flex flex-col h-full inset-[0] items-end justify-center m-auto sm:pl-5 pl-9 py-9 rounded-[20px] w-full">
                        <div className="flex flex-col gap-[55px] items-center justify-start mt-2 w-[33%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-6 items-start justify-start w-full">
                              <div className="flex flex-row gap-[18px] items-start justify-start w-[71%] md:w-full">
                                <Text
                                  className="text-[11.98px] text-blue_gray-900 tracking-[2.00px]"
                                  size="txtOswaldBold1198"
                                >
                                  <span className="text-blue_gray-900 font-circularstd text-left font-bold">
                                    SHOE
                                  </span>
                                  <span className="text-blue_gray-900 font-circularstd text-left font-bold">
                                    S
                                  </span>
                                </Text>
                                <Text
                                  className="mt-0.5 text-[11.98px] text-blue_gray-400"
                                  size="txtCircularStdBook1198"
                                >
                                  Adidas Originals
                                </Text>
                              </div>
                              <Text
                                className="sm:text-[25.95px] md:text-[27.95px] text-[29.95px] text-gray-900"
                                size="txtCircularStdBook2995"
                              >
                                <>
                                  Adidas Originals <br />
                                  OG Sneakers
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row font-roboto items-center justify-start w-[89%] md:w-full">
                                <Button
                                  className="cursor-pointer h-[29px] leading-[normal] text-[9px] text-center w-[29px]"
                                  shape="round"
                                >
                                  7
                                </Button>
                                <Button
                                  className="cursor-pointer h-[29px] leading-[normal] ml-[11px] text-[9px] text-center w-[29px]"
                                  shape="round"
                                >
                                  7.5
                                </Button>
                                <Button
                                  className="cursor-pointer h-[29px] leading-[normal] ml-[11px] text-[9px] text-center w-[29px]"
                                  shape="round"
                                >
                                  8
                                </Button>
                                <Button
                                  className="cursor-pointer h-[29px] leading-[normal] ml-[11px] text-[9px] text-center w-[29px]"
                                  shape="round"
                                >
                                  8.5
                                </Button>
                                <Button
                                  className="cursor-pointer h-[29px] leading-[normal] ml-[11px] text-[9px] text-center w-[29px]"
                                  shape="round"
                                >
                                  9
                                </Button>
                              </div>
                              <div className="flex flex-row font-oswald gap-8 items-start justify-between mt-[19px] w-full">
                                <div className="flex flex-col items-end justify-start">
                                  <Text
                                    className="mr-[3px] sm:text-[19.96px] md:text-[21.96px] text-[23.96px] text-deep_purple-A200 tracking-[1.00px]"
                                    size="txtOswaldBold2396"
                                  >
                                    <span className="text-deep_purple-A200 font-roboto text-left font-medium">
                                      $34
                                    </span>
                                    <span className="text-deep_purple-A200 font-roboto text-left font-medium">
                                      4
                                    </span>
                                  </Text>
                                  <Text
                                    className="line-through text-[13.98px] text-blue_gray-400 tracking-[1.00px]"
                                    size="txtOswaldBold1398"
                                  >
                                    <span className="text-blue_gray-400 font-roboto text-left font-medium">
                                      $56
                                    </span>
                                    <span className="text-blue_gray-400 font-roboto text-left font-medium">
                                      0
                                    </span>
                                  </Text>
                                </div>
                                <div className="bg-gray-100 flex flex-row font-roboto items-center justify-between mb-3 mt-1 p-3 rounded w-[57%]">
                                  <Img
                                    className="h-0.5"
                                    src="images/img_pathcopy.svg"
                                    alt="pathcopy"
                                  />
                                  <Text
                                    className="text-[11.98px] text-gray-900"
                                    size="txtRobotoRegular1198"
                                  >
                                    1
                                  </Text>
                                  <Img
                                    className="h-[7px] w-[7px]"
                                    src="images/img_plus.svg"
                                    alt="plus"
                                  />
                                </div>
                              </div>
                              <Text
                                className="bg-deep_purple-A200 h-[49px] justify-center mt-3.5 pb-[18px] pt-[15px] sm:px-5 px-[35px] rounded text-[11.98px] text-center text-white-A700 w-[217px]"
                                size="txtVarelaRoundRegular1198"
                              >
                                Add to cart
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[64%]">
                        <Img
                          className="h-[421px] md:h-auto object-cover rounded-bl-[20px] w-full"
                          src="images/img_bitmap.png"
                          alt="bitmap"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col md:gap-10 gap-[199px] inset-x-[0] justify-start mx-auto top-[8%] w-[85%]">
                    <div className="flex sm:flex-col flex-row sm:gap-10 gap-[62px] items-start justify-start w-[70%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start rounded-[20px] shadow-bs w-[58%] sm:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-[195px] md:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-full"
                            src="images/img_image15.png"
                            alt="imageFifteen"
                          />
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-bold mb-[90px] min-w-[147px] sm:mt-0 mt-[50px] rounded-[27px] text-[19.33px] text-center tracking-[7.73px]"
                        color="light_green_A700"
                        size="sm"
                      >
                        SALE
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row font-roboto md:gap-5 items-start justify-end ml-10 md:ml-[0] w-[95%] md:w-full">
                      <div className="bg-orange-300 flex flex-col h-[75px] items-start justify-start mb-[171px] p-[17px] rounded-[37px] w-[75px]">
                        <Img
                          className="h-[33px] my-[3px]"
                          src="images/img_cart.svg"
                          alt="cart"
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start ml-16 md:ml-[0] p-4 rounded-[20px] shadow-bs1 w-[61%] md:w-full">
                        <div className="flex flex-col items-center justify-start my-[15px] w-[99%] md:w-full">
                          <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                            <div className="flex flex-row items-end justify-between w-[85%] md:w-full">
                              <Img
                                className="h-8 md:h-auto mb-[3px] object-cover rounded-[16px]"
                                src="images/img_stripelogo1.png"
                                alt="stripelogoOne"
                              />
                              <Text
                                className="mb-[7px] mt-[13px] text-blue_gray-300 text-xs"
                                size="txtRobotoRegular12"
                              >
                                Stripe gateway
                              </Text>
                              <Switch
                                onColor="#70c217"
                                offColor="#d9e4f6"
                                onHandleColor="#ffffff"
                                offHandleColor="#8161f7"
                                value={true}
                                className="mt-3"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Line className="bg-blue-50 h-px w-full" />
                              <div className="flex flex-row items-center justify-start ml-4 md:ml-[0] mt-2.5 w-[87%] md:w-full">
                                <Img
                                  className="h-[52px] md:h-auto object-cover rounded-[23px] w-[30%]"
                                  src="images/img_paypallogo1.png"
                                  alt="paypallogoOne"
                                />
                                <Text
                                  className="ml-[37px] text-blue_gray-300 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Paypal payments
                                </Text>
                                <Switch
                                  onColor="#70c217"
                                  offColor="#d9e4f6"
                                  onHandleColor="#ffffff"
                                  offHandleColor="#8161f7"
                                  value={true}
                                  className="ml-[46px] w-[15%]"
                                />
                              </div>
                              <Line className="bg-blue-50 h-px mt-2.5 w-full" />
                              <div className="flex flex-row items-end justify-end md:ml-[0] ml-[59px] mt-5 w-3/4 md:w-full">
                                <Img
                                  className="h-7 mb-0.5 w-[29px]"
                                  src="images/img_home.svg"
                                  alt="home"
                                />
                                <Text
                                  className="ml-[58px] my-[7px] text-blue_gray-300 text-xs"
                                  size="txtRobotoRegular12"
                                >
                                  Bank Transfers
                                </Text>
                                <Switch
                                  onColor="#70c217"
                                  offColor="#d9e4f6"
                                  onHandleColor="#ffffff"
                                  offHandleColor="#8161f7"
                                  value={false}
                                  className="ml-[57px] mt-[7px] w-[17%]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-400 flex flex-col items-center justify-end mb-[97px] ml-6 md:ml-[0] md:mt-0 mt-[81px] p-4 rounded-[31px] w-[15%] md:w-full">
                        <Img
                          className="h-[35px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[186px] inset-x-[0] justify-start mx-auto top-[3%] w-[95%]">
              <header className="flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-center w-full">
                <Img
                  className="h-[34px] mb-1 md:mt-0 mt-2"
                  src="images/img_logo.svg"
                  alt="logo"
                />
                <ul className="flex md:flex-1 sm:flex-col flex-row gap-[38px] sm:hidden items-start justify-center ml-36 md:ml-[0] md:mt-0 my-[11px] w-[30%] md:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="mb-0.5 text-blue_gray-900 text-lg"
                    >
                      <Text size="txtRobotoMedium18">Sell</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-900 text-lg"
                    >
                      <Text size="txtRobotoMedium18">Marketplace</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="sm:mt-0 mt-0.5 text-blue_gray-900 text-lg"
                    >
                      <Text size="txtRobotoMedium18">Community</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-900 text-lg"
                    >
                      <Text size="txtRobotoMedium18">Develop</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-900 text-lg"
                    >
                      <Text size="txtRobotoMedium18">Resources</Text>
                    </a>
                  </li>
                </ul>
                <a
                  href="javascript:"
                  className="mb-2.5 md:ml-[0] ml-[717px] md:mt-0 mt-3.5 text-blue_gray-900 text-lg"
                >
                  <Text size="txtRobotoMedium18">Log In</Text>
                </a>
                <Button
                  className="cursor-pointer font-medium leading-[normal] min-w-[120px] md:ml-[0] ml-[38px] rounded-[5px] text-center text-lg"
                  shape="round"
                  color="deep_purple_A200"
                  size="sm"
                >
                  Get Started
                </Button>
                <Img
                  className="h-4 md:ml-[0] ml-[30px] md:mt-0 my-[15px] w-4"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
              </header>
              <Text
                className="leading-[95.00px] md:ml-[0] ml-[165px] md:text-5xl text-[85px] text-blue_gray-900 w-[46%] sm:w-full"
                size="txtCircularStdBold85"
              >
                Building exactly the eCommerce website you want.
              </Text>
            </div>
          </div>
        </div>
        <div className="font-roboto h-[1182px] md:h-[713px] sm:h-[926px] mt-[124px] md:px-5 relative w-full">
          <div className="absolute h-[1160px] md:h-[589px] sm:h-[802px] inset-[0] justify-center m-auto w-full">
            <div className="absolute h-[1141px] md:h-[589px] sm:h-[802px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute bottom-[0] h-[508px] object-cover right-[19%] rounded-[20px] w-[21%]"
                src="images/img_rectangle235.png"
                alt="rectangle235"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex h-[1110px] md:h-[589px] sm:h-[802px] inset-[0] justify-end m-auto pt-14 md:px-10 px-14 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group14.svg')" }}
              >
                <div className="h-[1054px] md:h-[589px] sm:h-[802px] mt-auto mx-auto w-[81%] md:w-full">
                  <div className="absolute md:h-[589px] sm:h-[802px] h-[868px] inset-x-[0] mx-auto top-[4%] w-[99%] md:w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Img
                          className="h-[472px] mb-[117px]"
                          src="images/img_group7_light_green_a700.svg"
                          alt="groupSeven_One"
                        />
                        <Img
                          className="h-[213px] sm:mt-0 mt-[376px]"
                          src="images/img_group8_light_green_a700.svg"
                          alt="groupEight_One"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[2%] flex flex-col items-start justify-start left-[24%] w-[34%]">
                      <Text
                        className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                        size="txtCircularStdBold36WhiteA700"
                      >
                        <>
                          Know our <br />
                          Global Community
                        </>
                      </Text>
                      <Text
                        className="leading-[30.00px] mt-[13px] text-lg text-white-A700 w-[95%] sm:w-full"
                        size="txtRobotoRegular18WhiteA700"
                      >
                        WooCommerce is one of the fastest-growing eCommerce
                        communities. We’re proud that the helpfulness of the
                        community and a wealth of online resources are
                        frequently cited as reasons our users love it. There are
                        80+ meetups worldwide!
                      </Text>
                      <Button
                        className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[256px] mt-[39px] rounded-[32px] text-center text-lg"
                        color="light_green_A700"
                        size="md"
                      >
                        Read the Documentation
                      </Button>
                    </div>
                    <Button
                      className="absolute cursor-pointer font-medium font-roboto inset-x-[0] leading-[normal] min-w-[256px] mx-auto rounded-[32px] text-center text-lg top-[34%]"
                      color="light_green_A700"
                      size="md"
                    >
                      Read the Documentation
                    </Button>
                    <Text
                      className="absolute right-[31%] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 top-[0]"
                      size="txtCircularStdBold36WhiteA700"
                    >
                      <>
                        Develop <br />
                        Without Limits
                      </>
                    </Text>
                    <div className="absolute border-[5px] border-orange-300 border-solid h-[401px] left-[0] rounded-[200px] top-[9%] w-[401px]"></div>
                    <div className="absolute border-[5px] border-orange-300 border-solid bottom-[19%] h-[262px] right-[4%] rounded-[50%] w-[262px]"></div>
                  </div>
                  <div className="absolute border-[5px] border-orange-300 border-solid h-[65px] left-[0] rounded-[32px] top-[7%] w-[65px]"></div>
                  <Img
                    className="absolute h-[474px] left-[10%] object-cover rounded-[20px] top-[0] w-1/4"
                    src="images/img_rectangle232.png"
                    alt="rectangle232"
                  />
                  <Img
                    className="absolute bottom-[0] h-[548px] object-cover right-[12%] rounded-[20px] w-[28%]"
                    src="images/img_rectangle235.png"
                    alt="rectangle233"
                  />
                </div>
                <div className="absolute border-[5px] border-orange-300 border-solid h-[65px] inset-y-[0] my-auto right-[32%] rounded-[32px] w-[65px]"></div>
              </div>
            </div>
            <Img
              className="absolute h-[329px] object-cover right-[0] top-[0]"
              src="images/img_union.png"
              alt="union"
            />
          </div>
          <Text
            className="absolute leading-[30.00px] right-[31%] text-lg text-white-A700 top-[21%] w-1/4 sm:w-full"
            size="txtRobotoRegular18WhiteA700"
          >
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </Text>
          <Img
            className="absolute h-[548px] left-[18%] object-cover rounded-[20px] top-[0] w-[23%]"
            src="images/img_rectangle232.png"
            alt="rectangle236"
          />
        </div>
        <div className="font-roboto h-[2682px] mt-[68px] md:px-5 relative w-full">
          <div className="h-[282px] md:h-[NaNpx] mb-[undefinedpx] mt-auto mx-auto w-full z-[1]">
            <div className="absolute bg-deep_purple-A400 flex sm:flex-col flex-row md:gap-10 gap-[67px] inset-x-[0] items-center justify-center mx-auto p-[78px] md:px-10 sm:px-5 top-[0] w-full">
              <Text
                className="sm:flex-1 leading-[52.00px] sm:ml-[0] ml-[392px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-[49%] sm:w-full"
                size="txtRobotoRegular36"
              >
                <span className="text-white-A700 font-roboto text-left font-normal">
                  WooCommerce - the{" "}
                </span>
                <span className="text-white-A700 font-roboto text-left font-bold">
                  most customizable eCommerce platform
                </span>
                <span className="text-white-A700 font-roboto text-left font-normal">
                  {" "}
                  for building{" "}
                </span>
                <span className="text-white-A700 font-roboto text-left font-bold">
                  your online business
                </span>
                <span className="text-white-A700 font-roboto text-left font-normal">
                  .
                </span>
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[207px] mr-[243px] rounded-[36px] text-center text-lg"
                color="white_A700"
                size="lg"
                variant="outline"
              >
                GET STARTED
              </Button>
            </div>
            <div className="absolute border-[5px] border-orange-300 border-solid bottom-[0] h-[88px] right-[8%] rounded-[44px] w-[89px]"></div>
          </div>
          <div className="bg-gradient1  font-circularstd h-[1209px] md:h-[437px] sm:h-[465px] mb-[-29.57px] mx-auto p-[102px] md:px-10 sm:px-5 w-full z-[1]">
            <div className="absolute bottom-[22%] flex md:h-[466px] sm:h-[494px] h-[567px] justify-end right-[21%] w-[55%] md:w-full">
              <div className="flex flex-row gap-[29px] h-full items-center justify-center mb-[61px] ml-auto mr-72 mt-auto w-[11%]">
                <Img
                  className="h-[15px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Img
                  className="h-[25px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <div className="absolute md:h-[466px] sm:h-[494px] h-[567px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bottom-[0] md:h-[466px] sm:h-[494px] h-[541px] inset-x-[0] mx-auto w-full">
                  <div className="absolute flex flex-col md:gap-10 gap-[68px] justify-start left-[0] top-[0] w-[94%]">
                    <Img
                      className="h-[213px] md:ml-[0] ml-[506px]"
                      src="images/img_group7.svg"
                      alt="groupSix"
                    />
                    <Img
                      className="h-[213px] mr-[506px]"
                      src="images/img_group7.svg"
                      alt="groupFive_Two"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-[79px] right-[0] rounded-[50%] w-[79px]"
                    src="images/img_ellipse11.png"
                    alt="ellipseEleven"
                  />
                </div>
                <Img
                  className="absolute bottom-[3%] h-[89px] right-[0] rounded-[50%] w-[89px]"
                  src="images/img_ellipse30.png"
                  alt="ellipseThirty"
                />
                <div className="absolute md:h-[363px] h-[439px] left-[12%] top-[0] w-[70%] md:w-full">
                  <div className="absolute bottom-[0] md:h-[363px] h-[383px] inset-x-[0] mx-auto w-[93%] md:w-full">
                    <div className="absolute bg-white-A700 bottom-[0] h-[331px] inset-x-[0] mx-auto rounded-[20px] w-[92%]"></div>
                    <div className="absolute bg-white-A700 h-[363px] inset-x-[0] mx-auto rounded-[20px] shadow-bs1 top-[0] w-full"></div>
                  </div>
                  <div className="absolute bg-white-A700 md:h-[198px] h-[391px] inset-x-[0] mx-auto p-7 sm:px-5 rounded-[20px] shadow-bs1 top-[0] w-full">
                    <Img
                      className="absolute h-[168px] inset-x-[0] mx-auto top-[7%]"
                      src="images/img_.svg"
                      alt="Two"
                    />
                    <Text
                      className="absolute bottom-[22%] inset-x-[0] leading-[39.00px] mx-auto sm:text-[22.7px] md:text-[24.7px] text-[26.7px] text-blue_gray-300 text-center w-[78%] sm:w-full"
                      size="txtCircularStdBook267"
                    >
                      <>
                        No other eCommerce platform allows people to start for
                        free and grow their store as their business grows. More
                        importantly, WooCommerce doesn&#39;t charge you a
                        portion of your profits as your business grows!
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute md:h-[154px] h-[164px] right-[12%] top-[39%] w-[9%]">
              <Img
                className="absolute bottom-[0] h-[130px] inset-x-[0] mx-auto rounded-[50%] w-[130px]"
                src="images/img_ellipse5.png"
                alt="ellipseFive"
              />
              <Img
                className="absolute h-[154px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[154px]"
                src="images/img_ellipse28.png"
                alt="ellipseTwentyEight"
              />
            </div>
            <div className="absolute bottom-1/4 md:h-[105px] h-[121px] left-[13%] w-[6%]">
              <Img
                className="absolute bottom-[0] h-[97px] inset-x-[0] mx-auto rounded-[50%] w-[97px]"
                src="images/img_ellipse6.png"
                alt="ellipseSix"
              />
              <Img
                className="absolute h-[105px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[105px]"
                src="images/img_ellipse26.png"
                alt="ellipseTwentySix"
              />
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-center mx-auto top-[11%] w-[57%]">
              <div className="md:h-[136px] h-[156px] md:mt-0 mt-[85px] relative w-[13%] md:w-full">
                <Img
                  className="absolute bottom-[0] h-[124px] inset-x-[0] mx-auto rounded-[50%] w-[124px]"
                  src="images/img_ellipse14.png"
                  alt="ellipseFourteen"
                />
                <Img
                  className="absolute h-[136px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[136px]"
                  src="images/img_ellipse15.png"
                  alt="ellipseFifteen"
                />
              </div>
              <Text
                className="leading-[70.00px] md:ml-[0] ml-[173px] sm:text-[41px] md:text-[47px] text-[55px] text-blue_gray-900 text-center"
                size="txtCircularStdBold55"
              >
                <>
                  Trusted by Agencies
                  <br />& Store Owners
                </>
              </Text>
              <div className="h-[108px] md:h-[94px] md:ml-[0] ml-[158px] md:mt-0 mt-[71px] relative w-[9%] md:w-full">
                <Img
                  className="absolute bottom-[0] h-[84px] inset-x-[0] mx-auto rounded-[50%] w-[84px]"
                  src="images/img_ellipse10.png"
                  alt="ellipseTen"
                />
                <Img
                  className="absolute h-[94px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[94px]"
                  src="images/img_ellipse29.png"
                  alt="ellipseTwentyNine"
                />
              </div>
            </div>
            <div className="absolute h-[109px] md:h-[93px] left-[8%] top-[36%] w-[5%]">
              <Img
                className="absolute bottom-[0] h-[93px] inset-x-[0] mx-auto rounded-[50%] w-[93px]"
                src="images/img_ellipse9.png"
                alt="ellipseNine"
              />
              <Img
                className="absolute h-[93px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[93px]"
                src="images/img_ellipse27.png"
                alt="ellipseTwentySeven"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[138px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
                <Text
                  className="sm:text-[41px] md:text-[47px] text-[55px] text-blue_gray-900 text-center"
                  size="txtCircularStdBold55"
                >
                  Supported by real people
                </Text>
                <Text
                  className="leading-[25.00px] mt-[25px] text-blue_gray-300 text-center text-lg w-2/5 sm:w-full"
                  size="txtRobotoRegular18"
                >
                  Our team of Happiness Engineers works remotely from 58
                  countries providing customer support across multiple time
                  zones.
                </Text>
                <div className="md:h-[395px] h-[416px] sm:h-[557px] mt-4 relative w-full">
                  <div className="absolute bottom-[0] md:h-[379px] h-[381px] sm:h-[541px] inset-x-[0] mx-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[17px] w-[93%] md:w-full">
                          <div className="border-[5px] border-orange-300 border-solid h-[75px] mt-[34px] rotate-[-16deg] rounded-[37px] w-[75px]"></div>
                          <div className="border-[5px] border-orange-300 border-solid h-[43px] rounded-[21px] w-[43px]"></div>
                        </div>
                        <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                          <Img
                            className="h-[162px] sm:mt-0 mt-[108px]"
                            src="images/img_group7.svg"
                            alt="groupThirteen_One"
                          />
                          <Img
                            className="h-[213px] mb-[57px]"
                            src="images/img_group7.svg"
                            alt="groupFive_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute bottom-[3%] h-[273px] inset-x-[0] mx-auto rounded-[40px]"
                      src="images/img_rectangle235_gray_200.svg"
                      alt="rectangle235_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[293px] inset-x-[0] mx-auto object-cover top-[0] w-[78%]"
                    src="images/img_image24.png"
                    alt="imageTwentyFour"
                  />
                  <div className="absolute border-[5px] border-orange-300 border-solid h-[34px] inset-y-[0] left-[7%] my-auto rounded-[50%] w-[34px]"></div>
                </div>
              </div>
              <footer className="flex items-center justify-center w-full">
                <div className="flex flex-col gap-[26px] items-center justify-center w-full">
                  <div className="bg-deep_purple-A200 flex flex-col items-center justify-start p-[51px] md:px-10 sm:px-5 w-full">
                    <ul className="flex flex-col items-center justify-start mb-[13px] w-[82%] md:w-full common-column-list">
                      <li>
                        <a href="javascript:">
                          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between">
                            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[64%] md:w-full">
                              <div className="flex flex-row gap-[15px] items-center justify-start w-[42%] md:w-full">
                                <Img
                                  className="h-[41px] w-[41px]"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtRobotoRegular20"
                                >
                                  <span className="text-white-A700 font-roboto text-left font-normal">
                                    30 day{" "}
                                  </span>
                                  <span className="text-white-A700 font-roboto text-left font-bold">
                                    money back guarantee
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[15px] items-center justify-start w-[44%] md:w-full">
                                <Img
                                  className="h-[41px] w-[41px]"
                                  src="images/img_user.svg"
                                  alt="user"
                                />
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtRobotoRegular20"
                                >
                                  Support teams across the world
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[15px] items-center justify-start w-[27%] md:w-full">
                              <Img
                                className="h-[41px] w-[41px]"
                                src="images/img_location.svg"
                                alt="location"
                              />
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtRobotoRegular20"
                              >
                                Safe & Secure online payment
                              </Text>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <Img
                            className="h-[37px] mt-[141px]"
                            src="images/img_logo_white_a700.svg"
                            alt="logo_One"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <Line className="bg-deep_purple-A100 h-px mt-14" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:">
                          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between mt-[50px]">
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <Text
                                className="text-sm text-white-A700 uppercase"
                                size="txtRobotoBold14"
                              >
                                Who we Are
                              </Text>
                              <Text
                                className="leading-[22.00px] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>
                                  About
                                  <br />
                                  Team
                                  <br />
                                  Work With Us
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <Text
                                className="text-sm text-white-A700 uppercase"
                                size="txtRobotoBold14"
                              >
                                Woocommerce
                              </Text>
                              <Text
                                className="leading-[22.00px] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>
                                  Features
                                  <br />
                                  Payments
                                  <br />
                                  Marketing
                                  <br />
                                  Shipping
                                  <br />
                                  Extension Store
                                  <br />
                                  eCommerce blog
                                  <br />
                                  Development blog
                                  <br />
                                  Ideas board
                                  <br />
                                  Mobile App
                                  <br />
                                  Community
                                  <br />
                                  Style Guide
                                  <br />
                                  Email Newsletter
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <Text
                                className="text-sm text-white-A700 uppercase"
                                size="txtRobotoBold14"
                              >
                                Other products
                              </Text>
                              <Text
                                className="leading-[22.00px] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>
                                  Storefront
                                  <br />
                                  WooSlider
                                  <br />
                                  Sensei
                                  <br />
                                  Sensei Extensions
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <a
                                href="javascript:"
                                className="text-sm text-white-A700 uppercase"
                              >
                                <Text size="txtRobotoBold14">Support</Text>
                              </a>
                              <Text
                                className="leading-[22.00px] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>
                                  Documentation
                                  <br />
                                  Customizations
                                  <br />
                                  Support Policy
                                  <br />
                                  Contact
                                  <br />
                                  COVID-19 Resources
                                  <br />
                                  Privacy Notice for
                                  <br />
                                  California Users
                                </>
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[18px] items-start justify-start">
                              <Text
                                className="text-sm text-white-A700 uppercase"
                                size="txtRobotoBold14"
                              >
                                We recommend
                              </Text>
                              <Text
                                className="leading-[22.00px] text-white-A700 text-xs"
                                size="txtRobotoRegular12WhiteA700"
                              >
                                <>
                                  WooExperts
                                  <br />
                                  Hosting Solutions
                                  <br />
                                  Pre-sales FAQ
                                  <br />
                                  Success Stories
                                  <br />
                                  Design Feedback Group
                                </>
                              </Text>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[78%] md:w-full">
                    <Img
                      className="h-5"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                    <Img
                      className="h-[19px] md:ml-[0] ml-[54px] w-5"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <Img
                      className="h-5 md:ml-[0] ml-[54px] w-5"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <Img
                      className="h-5 md:ml-[0] ml-[53px] w-5"
                      src="images/img_info.svg"
                      alt="info"
                    />
                    <Text
                      className="md:ml-[0] ml-[283px] md:mt-0 mt-[3px] text-blue_gray-900 text-center text-xs"
                      size="txtRobotoRegular12Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-roboto font-normal">
                        COPYRIGHT WOOCOMMERCE 2020 -{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-900 font-roboto font-normal underline"
                      >
                        TERMS & CONDITIONS{" "}
                      </a>
                      <span className="text-blue_gray-900 font-roboto font-normal">
                        {" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_gray-900 font-roboto font-normal underline"
                      >
                        PRIVACY POLICY
                      </a>
                    </Text>
                    <Img
                      className="h-3.5 sm:h-auto md:ml-[0] ml-[346px] md:mt-0 mt-[3px] object-cover w-[13%] md:w-full"
                      src="images/img_image25.png"
                      alt="imageTwentyFive"
                    />
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
