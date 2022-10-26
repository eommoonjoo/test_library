interface TColors<T> {
  /**
   * #f4f4f4
   */
  touchB_grey1: T;
  /**
   * #e1e1e1
   */
  touchB_grey2: T;
  /**
   * #d8d8d8
   */
  touchB_grey3: T;
  /**
   * #8b8b8b
   */
  touchB_grey4: T;
  /**
   * #333333
   */
  touchB_grey5: T;
  /**
   * #484848
   */
  touchB_grey6: T;
  /**
   * #0050ff
   */
  touchB_point: T;
  /**
   * #ffffff
   */
  touchB_white1: T;
  /**
   * #FAFAFA
   */
  touchB_white2: T;
  /**
   * #ececec
   */
  touchB_white3: T;
  /**
   * #F1F1F1
   */
  touchB_white4: T;
  /**
   * #f8f1e0
   */
  touchB_yellow: T;
  /**
   * #65658a
   */
  touchB_purple: T;
  /**
   * #02023b
   */
  touchB_blue: T;
  /**
   * #FF4B4C
   */
  touchB_red: T;
}

interface Colors<T> {
  [k: string]: T;
}

export const colors: TColors<string> = {
  touchB_grey1: "#f4f4f4",
  touchB_grey2: "#e1e1e1",
  touchB_grey3: "#d8d8d8",
  touchB_grey4: "#8b8b8b",
  touchB_grey5: "#333333",
  touchB_grey6: "#484848",
  touchB_point: "#0050ff",
  touchB_white1: "#ffffff",
  touchB_white2: "#FAFAFA",
  touchB_white3: "#ececec",
  touchB_white4: "#F1F1F1",
  touchB_yellow: "#f8f1e0",
  touchB_purple: "#65658a",
  touchB_blue: "#02023b",
  touchB_red: "#FF4B4C",
};
