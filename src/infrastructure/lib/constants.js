/*
 * lib: constants.js
 * author: Favour George
 * Date: June 22, 2020
 */

const __mode = {
  production: true,
  development: false
}
export const MODE = __mode[process.env.NODE_ENV];

export const ROLE_MATCHER = {
  teacher: "Teacher",
  admin: "Super Admin",
  accountant: "Finance",
  customer_care: "Support",
  marketing_admin: "Marketing",
  academic_admin: "Academics"
}

export const ROLE_VALUE_MATCHER = {
  Teacher: "teacher",
  "Super Admin": "admin",
  Finance: "accountant",
  Support: "customer_care",
  Marketing: "marketing_admin",
  Academics: "academic_admin",
}

export const DEFAULT_CLASSES = [
  {list: "Basic 1"},
  {list: "Basic 2"},
  {list: "Basic 3"},
  {list: "Basic 4"},
  {list: "Basic 5"},
  {list: "Basic 6"},
  {list: "Basic 7"},
  {list: "Basic 8"},
  {list: "Basic 9"},
]

export const CLASS_MATCHER = {
  basic_1: "Basic 1",
  basic_2: "Basic 2",
  basic_3: "Basic 3",
  basic_4: "Basic 4",
  basic_5: "Basic 5",
  basic_6: "Basic 6",
  basic_7: "Basic 7",
  basic_8: "Basic 8",
  basic_9: "Basic 9",
}