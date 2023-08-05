/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'LoginBackgroundImage' : ` url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(21%2c 67%2c 96%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c645.922C118.89%2c651.33%2c199.508%2c525.016%2c282.734%2c439.943C350.679%2c370.49%2c382.942%2c280.355%2c436.766%2c199.465C503.266%2c99.526%2c622.99%2c27.802%2c636.351%2c-91.494C650.429%2c-217.195%2c583.499%2c-338.757%2c508.451%2c-440.575C429.358%2c-547.882%2c333.697%2c-677.567%2c200.495%2c-682.824C64.176%2c-688.204%2c-21.028%2c-538.145%2c-136.843%2c-466.043C-216.763%2c-416.287%2c-302.201%2c-384.726%2c-374.731%2c-324.706C-460.165%2c-254.007%2c-569.402%2c-193.305%2c-596.4%2c-85.749C-623.83%2c23.531%2c-577.272%2c141.233%2c-515.305%2c235.332C-457.911%2c322.487%2c-348.289%2c349.921%2c-266.673%2c414.952C-172.8%2c489.749%2c-119.904%2c640.468%2c0%2c645.922' fill='%2311364d'%3e%3c/path%3e%3cpath d='M1440 1086.348C1536.638 1092.3139999999999 1597.673 984.304 1681.051 935.0830000000001 1768.768 883.3009999999999 1881.7939999999999 871.2180000000001 1942.712 789.581 2008.583 701.306 2043.505 584.418 2023.545 476.099 2003.8110000000001 369.002 1918.4940000000001 288.238 1837.017 215.983 1763.3609999999999 150.664 1674.044 112.29500000000002 1580.104 82.84800000000001 1484.601 52.911 1378.205-0.34400000000005093 1288.501 44.043000000000006 1198.221 88.71499999999997 1201.625 220.41199999999998 1140.42 300.413 1084.671 373.28200000000004 984.637 405.174 947.898 489.246 906.028 585.059 867.275 707.813 924.002 795.649 981.8820000000001 885.27 1124.395 854.091 1217.345 906.457 1302.193 954.258 1342.798 1080.347 1440 1086.348' fill='%23195073'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
        'WelcomeBackgroundImage': `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1003%26quot%3b)'%3e%3c/rect%3e%3cpath d='M292.22 628.94C402.17 625.66 494.02 460.87 698.77 460.69 903.53 460.51 902.05 530.69 1105.33 530.69 1308.6 530.69 1408.75 460.95 1511.88 460.69' stroke='rgba(202%2c 201%2c 201%2c 0.78)' stroke-width='2'%3e%3c/path%3e%3cpath d='M303.68 590.01C450.65 567.57 522.66 219.73 765.95 215.86 1009.25 211.99 997.09 285.86 1228.23 285.86 1459.36 285.86 1573.61 216.06 1690.5 215.86' stroke='rgba(202%2c 201%2c 201%2c 0.78)' stroke-width='2'%3e%3c/path%3e%3cpath d='M576.77 626.73C716.72 622.75 810 427.22 1095.55 415.8 1381.1 404.38 1468.47 154.82 1614.33 147' stroke='rgba(202%2c 201%2c 201%2c 0.78)' stroke-width='2'%3e%3c/path%3e%3cpath d='M584.64 663.63C745.13 649.14 853.35 316.25 1127.35 315.88 1401.34 315.51 1525.83 508.91 1670.05 511.88' stroke='rgba(202%2c 201%2c 201%2c 0.78)' stroke-width='2'%3e%3c/path%3e%3cpath d='M765.97 630.23C933.46 578.87 974.03 108.5 1223.88 99.8 1473.74 91.1 1562.89 227.38 1681.8 228.6' stroke='rgba(202%2c 201%2c 201%2c 0.78)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='50%25' x2='100%25' y2='50%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1003'%3e%3cstop stop-color='rgba(21%2c 67%2c 96%2c 1)' offset='0.39'%3e%3c/stop%3e%3cstop stop-color='rgba(45%2c 146%2c 194%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");`,
        'DashboardBackgroundImage':`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1003%26quot%3b)'%3e%3c/rect%3e%3cpath d='M -31.32696054099415%2c293 C 64.67%2c270.4 256.67%2c149.2 448.67303945900585%2c180 C 640.67%2c210.8 736.67%2c454.2 928.6730394590058%2c447 C 1120.67%2c439.8 1216.67%2c150.4 1408.6730394590058%2c144 C 1600.67%2c137.6 1882.41%2c412.6 1888.6730394590058%2c415 C 1894.94%2c417.4 1529.73%2c207.8 1440%2c156' stroke='rgba(220%2c 220%2c 220%2c 0.56)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -695.195976551073%2c78 C -599.2%2c125.6 -407.2%2c304.6 -215.19597655107307%2c316 C -23.2%2c327.4 72.8%2c123.2 264.80402344892696%2c135 C 456.8%2c146.8 552.8%2c354.4 744.804023448927%2c375 C 936.8%2c395.6 1085.76%2c236.6 1224.804023448927%2c238 C 1363.84%2c239.4 1396.96%2c353.2 1440%2c382' stroke='rgba(220%2c 220%2c 220%2c 0.56)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -362.9299866922397%2c423 C -266.93%2c364.6 -74.93%2c127.8 117.07001330776026%2c131 C 309.07%2c134.2 405.07%2c436 597.0700133077603%2c439 C 789.07%2c442 885.07%2c147.4 1077.0700133077603%2c146 C 1269.07%2c144.6 1484.48%2c429 1557.0700133077603%2c432 C 1629.66%2c435 1463.41%2c215.2 1440%2c161' stroke='rgba(220%2c 220%2c 220%2c 0.56)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -536.8881670708586%2c124 C -440.89%2c170.6 -248.89%2c331.2 -56.88816707085856%2c357 C 135.11%2c382.8 231.11%2c227.6 423.1118329291414%2c253 C 615.11%2c278.4 711.11%2c509 903.1118329291414%2c484 C 1095.11%2c459 1275.73%2c166.6 1383.1118329291414%2c128 C 1490.49%2c89.4 1428.62%2c258.4 1440%2c291' stroke='rgba(220%2c 220%2c 220%2c 0.56)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1003'%3e%3cstop stop-color='rgba(21%2c 67%2c 96%2c 1)' offset='0.47'%3e%3c/stop%3e%3cstop stop-color='rgba(38%2c 160%2c 218%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");`
      },
    },
  },
  plugins: [],
}