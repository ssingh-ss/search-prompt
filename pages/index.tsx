import { Answer } from "@/components/Answer";
import { Search } from "@/components/Search";
import { SearchQuery } from "@/types";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import Head from "next/head";
import { useState } from "react";


export default function Home() {
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({ query: "", sourceLinks: [] });
  const [answer, setAnswer] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>FakeNews Detection</title>
        <meta
          name="description"
          content="AI-powered search."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>

      <div style={{ backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8QDw8QEA8QEBAQEA8WEBcSFhgPFhYYFxYWFxYZHikhGhspHBYWIjIjJiosMC8vGCA1OjUtOSkuLy4BCgoKDg0OGRAQGy4iICYwLi4uLjAsLi4uLi4sLC4uLi4uLiwwLi4sLi4uLi4uLi4uLiwuLi4uLi4uLi4uLi4sLv/AABEIAL0BCwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIFBgcEAwj/xABTEAABAwICBAkGBwsICwAAAAABAAIDBBEFEgYTITEHIkFRYXGBkaEUMkJ0scEjNENSYoKyFSQzU3JzkqKzwtElNURFlJXD8BdjZHWDhaO04eLx/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA5EQACAQICBgcGBAcBAAAAAAAAAQIDEQQhBRIxQVFxE2GBobHB8DM0QnKR0SIy4fEUIyRSYpLSBv/aAAwDAQACEQMRAD8A6CiIvzQ9wIrKFNgSiKVIKorKEIChSiAhSpRAQilQhJVFZFFgVREUAIiIAiIgCIiAIiIAiIgCIiAIiIAiIpQJUqFZEgQpRSpIIUoikBERTYEWUpZLKbAIsFpTjUtPqoaWITVc+fVMJsxrGAZ5Hn5ouOu61R0WNS+fiEbCeRgdYdAy5Ni7KOBdSOvKainsvfPsSfrYZSq2dkrnSLL4TVEbNr5GMHO54b7V+ca/SOvc98b5pC5rnMIzvfxgbEWeTzLzRwV8p4sM7ieVsJHiGr1F/wCfUc6lW3Z935HP/GcI95+h5tJKBnnVlPcbwJWvPc2688WmOHOdkFUy/OWva3tcRYdq1HCtE6JrIvKY3SSatutJme68mXjWaXZfO6F49MdGqWKKOppIHQGKRjZCBZrmPOUAgbL3LdqxpYDBznqa8m27X/D4Z+JeVSrFXsu86qDfqRa5wf1TpKFgcbmJ74gfoizmjsDgOxbKvGr0XRqypvc2vodMJa0VLiVREWJYIiIAiIgCIiAIiIAiIgCIiAIiKUC6IpViAiKVawIUqyhWsQQrWRLKbEXCWREsLmBqKSOTEJXy67LFQRWEUZledZO9pAa1pJ81t7Dk27l6/I4R5mHYnP16mL9pIxerBv5zm/3fB+3lWMouEV08bntpmsLMYhwtzTKX8SRwbrQQ0WO/i9G9fV4CjSlh4NxTdt/Nnn1ZyU2k7GShoHb2YOWk/j61je/VmReiKirT/QcMi5iZ5Jz3ahntWo4XptjdVXSxx0MQoIampgfVNikNhFmAu4vte4bfZyr0YRplVzzaNh0jQ3EIq19WxrGgOdGw5LXBLQHDkK7404R2RiuxGLk3vZtMtNijBmbPQMFxxI8Ole63Xr/3VrnCKypGEVRqJnyXlobNMLImtPlMd8uXjG+zfzLV6zFcXxSDDaSlrHwz1IxCrlmzmImKKd7IWZoxcCzbWG8kX3LJ4pjEldopDUTEulc6lZI473Ojq2x5j0nJftWt2itj68GfxN/rMn2I1tq1Pgz+Jv8AWpPsRrbV8PpL3urzZ6tD2ceRCqpUrhNiqIigBERAEREAREQBERAEREAREUoH0RFK0RAVkRWICsoU2V7FSLK1lNksrWIK2SyvZLJqgx+FG2JzeoQft5VyrAbxyysJuJscw2qaOYCtqYXeMbe9dUw82xSX1CD9vKuU1BdHPgjm+bPilRE//hYlnb9sr6jAS/kJdX3OCt+Z+uBv/BrjNN9+0ZmZ5U/E8ReIL8fJnvmtzWBXPtG6wtm0WvsMTK5hHMTNMz3LduDXAKXXVmIGM+VjEcQiEmd1tXntbJfLuJ5Fz6KoEbnvuAKGpYx30c9ZVE+BauynJScrdXmjNqyRnaOrdhkOjWJuBNPqp6aqI9Fs73SA/rPd9S3Kt44URGMHlEQYI9bRloYAG2M8ZuANltt1isONNVYZRYNKx5kqMGjqmPytyNs0ZXXvfMHkHd2rDvrHzaJU7n7XNdTxfVirBGz9VrVRT1nF9dvrexNtpmODVtqN/rDj3xxH3rbFqvBx8Td+e/woltS+S0l73V+Zno0PZx5EKqlFwmpUorKqqSEREAREQBERAEREAREQBERSgfQKwUBWC1RUkIjVYLRFSArgKArK6IIspspspstLFWVsll5q7FKeC2umZHchoLjbjHYBfnuvXZTq5XIuYelNsUl9Qg/byrTp9G6p8OEkQO1lNjcs8jdgLaZ9S6Qv2ndYMPaFs9WB5fPmfIwfc+Al0ebOAJ5DxcoJ7gvjI2l5ZsYd+T90P3GhelSqOMEl1eu8xcbswOjFNj9NXvi1DWYbJX1M73kwlxZI5xB87NY8XcLrFVOgGISMxxohYDWVkUtLeVnGjbPK8k2PF4rmmx27VuUdDRuI/nZ1z6U+JAduZwCwmLaR4DSSugn8qMrAwuaZKiXzmh42ukIOxwXXTxEpSvBZ9Ub7He+36lHTSVm+8vpRohiTosNfhsjYqmloxRSjOG3iLGg2cRbYQ7vBG5X0owcUGjrKS4cYXUge4bjI6pY95F+TM51lhptONGjvpJJPyoM32nquJ4rhlVhVc/DaQUwZPQslOpZEXHXsLfMJvbbv51ePSrUUotK63Jb+fkVerZ24etxsfBq69G/1hw7o4h7lta1Xg2FqN/58ntMURW1L5/SK/qqnzM7KHs4hQpKhcBsQqlSiqSQiIoAREQBERAEREAREQBERSgfUKQoCsFsirJCsFUKwWiKlwpCqFYLVFGSApdexsLm2wdPIpC0jSThIgpZJIIYXTyxuLHuLgyIPGwi+1ziDv2AdK6KNCdV2grlJSS2nKqvSeaGviqZBrJYJsz43i+1pIe2x3OG23MQOZfoTDqps8TJWG7ZBmaecci4HX4/LUyPkqGU8okcXPYaaIA9AeG5xYbAcxOwbSu1aH4rRVNMwUQEbImhpp9zovokc2+x3FenpCneMXa1stuWfYrZ9RjTebPDisgZW1Di5rQMNiJc6YwNA10u0yjawdIWHbXQuN/KKU9WkdUfANsszipcMQmyl4d9zorFmQOvrpfN1nFv17F5my1HLJX9slAPYF5rnbLlvtuXWbpXPnT1ERc34SmPGb/WtTLy8xG1cY4Sj/KlT+TT/APbxrt0cs2Zt31m8XvNSW38uULnOl2gdbWVktRE6mEcjYcuaYNdxYmNNxbZtBXfo7EQhVbqOys9rXFcDGtBtZLuOXLfdFT/IuJ+t0H7Rq+X+jCv/ABlH/aB/BZuLR6fD8Jr2TuicZKihc3VyZxYTNBvs2L062LoTUYxkm3KOx/5IwjTkrtrc/Bm8cGXxOT1l/wBiNbaVqXBj8Tk9Zk+xGttK+X0j71V+ZnfQ9nHkQoKlQvPNiCiIoJKoiKoCIiAIiIAiIgCIiAIiKUD6hWCqFYLdFWWCkKoVgtEVLhWaqBWC0RRng0ixQUdJUVB3xRuLRzybmDtcQF+dHvcRncblznXcd5dsLif0h3rrHDVWOZSU8Y82WoGfpDGucB3gHsXJKt9tWwbmxRu63StEpPdIG9TAvoNGU0qbk978PTOWs87Eh1/E9wuuicCjiamr5tQy/Xn2e9c7gFo5JTu2RMNt8jtrh2MzX5szedda4E8NLKaeqcPjEgjZ+biuCf03PH1VtjWlRl9O8pTzkZnHfj0ote+HRC2r1l/hpPQ9LqWM1Q/EN/un/wBlbTqs1FRUy5GyZMMa7I7zXWmk2HoXOaLTtskkcZw6lGd7GXF9mYgX3dK8eGEqVU5QV1lujwXH9jp6SMVZ+fkdHia0Ob8E0cYf1Xbl577OtTNYkHVtPFZt+55m9EenfjLTIeEYsqBSto2BrZ9QHCUiwz5b2y+C2R+I0Qe2OSeNsxEbTH5S9jsxaLDKHbzcd6ynh6tNrXjt2WUXl5erF4zjLY/E9mZv4sf3S7+Kxel7v5OqBYD4Wk/oppvlmch873L1Oq6IEg1LAQSCPL5Abjk89eDS+tikw+RsUrHhslKOLNrSPhmWud99nKpwyfT08vij8KW8io1qPkzPcGPxOT1qT7Ea21alwY/E5PWZPsRrbVz6R96qcy1D2ceRChSoXAbEIiKCSqIiqAi+UtQ1oJ2u6GjMbrFVWKy7mxlg53NJP8B4q8KcpbCHJIzL3AC5IA5ybL4MronGweCeaxWvsna43mzvPNm/z4LJQYjA0Wa0t+qNvbdaSoaq3sqp3Msiwz8Vc42YGt+k4j/57V6qQO3unD/oty279/sVHTaWZKkme9F55qpjPOcB0bz3Ly/dB79kMRd9J2wf57VEacnmS2kZJF8qfWW+EyX5m396+yrYk+gVgqhWC2RUkKwVQrBaIqXCkKgVgroqabws4YajDnuaLvp3tnAtc5RxX2+qT3LkL8Inc6BszHw/e0ksl2cdsEOZxfk331eQAG27kG1fo6QNLXBwu0ghwIvdttotyr88YhpLWUta+SOUjNmBjfHkvETbJLGQOQDdzCxXu6MqTcJQjbLPht6/0OStFJ3Zhq2s1hFm5I2DLFEDcNZe+/lcTtc7lJ6gO58D774TB0S1I/6rj71+fnPuSbAXJNgLAX5AOZd24FpL4Zb5tVMO8Nd+8unSitQ7V5lKL/EeLhRdaSq6cL/xZFxLCvw8H56L7QXa+E2Nz55mMGZ78ODWjnJlfsXKKLR6tZLE51O8BsjCTsOwOBO4po+UVQkpNK//ACiaybkrI9pwCs8u1uofk8r1mbYeLrL32HmUY4b4u0/6+j+zEt7Idmvl9K/PyrXa7AWSVTagyzBwdC/KKd728RrdgcPyVFLEqUry3Rtl2cyZU7LLibdJPNc8attc2s2mItfk2Xt1rF6TyvNFKHOmPwtNbWMY35Vu7INq+b5m3JELNpJ/BTtPbZi8eNyA0ktmhvwtPudIflW8j2i3YuKhSSqQdt63Ljxua1JZPkzfODH4lJ61J9iNbaVqXBl8Tf6zJ9iNbYvM0j71V+Zm1D2ceQUFCsVWaQU0Ztnzu5mcbx3eK4YwlN2irmraW0yhXynnZGLvc1o6Tbu51r8mkod5vEHVcryPqaeQ3eczjykOv3rWOGl8SZVzW4zpxmE+a8HrOX2ryV7nzDiS/UDgAe0e9Y0R0p9K3aferCkgO6a3WR/4Wipxi7q/airbe0pTTvhdsuPnNP8ABZePFYrAkkHlFifFYzyJp3TxHrNverxUsjTdj4yd2xwPgVaahPb5oK6MkcSgO/b9W/tXydVUp+T7mgewq9O2rvYtYBzuAH2VlI2EDjEE9AsFzycY/oy6uzC2p3bGxT35ht9pK9DcIa7bx2dDspPgssip0z3eNydVHjgwyJno5jzu2+G5ewIizlJyzZZKwRERA+isqKy1TKlgpChFdEFlcFfNTdWTKlaqcRxySHdGx7z1NBJ9i/LsWLVNrCWQhx/B3Lm3cb7GG439C/RGnVRq8Mr3XsfJZWg9L25R7Vw7g2w4VOKUjCLsjeZ39UQzj9YN717+iWoUatV7vJNnHiLuUUYTEaaSCaWKUASxvcyQDcHg7Rs6V33gooGwYVTuaCHTl9RJtvdzjlHVxGMHYuL8IbMmK4gOedzv0gHe9d40EbbDMPH+ywnvaD71ppSq3hqb/us+65FCP431Gr8IR+/QCAb0LRYszj8K/wBHl6lp4DB8nCP+XyDxBW0cJTyK1ljY+RDbzfCv6FqEdc5p2yRu6HSBvsYssPBukmjSTzPZE9oI2RDaPk5Y/arTVUTSLlxdlbe0+rsbDkLwvhHiBJ+TPVKD7gqGZ/IZrWHmmK27mdtW2q28/H7Fbrd4H3jrYydmu/tTXeGtKrj1WJKd1gR8JBvt+MbzFfHWv5TL2sjd9leXEpLwu/OQ/J6v0x3q9OnHXi+tceJEpPVZ0TQHE4KeieZpWs++ZCATdx4ke5o2nsC9lVplmNqaEv8Apv4o7h7yFz/DqfM0m9uMRu6AspHDKNz/ABK4sVhaTrzlLNt9henOWokjOVVVJUD4Zxt80OIb3CwXlfRMHymX8qy8g8ota/cQpiY9pu6IvPTc+xYqOqrJ9iLX4ntjgkG1pY8djvavqJi3z4G9eXL47kpat7iGthcT81oJ8LLYKPDpHC7xq+gkOPgbeK5qtTU/MvXYXir7DAPqGO2NjYwfONz7FksPwxjxmBMg6LtCzceGQg3LGudzkAr2LknicrQNVDiYpmBxcoI6nH3r3U9HHH5jADz7z3lfdFzupOW1l0kgiIqEhERAEREAREUoH0RQpVkyCym6opVyCylQourEWNR4Wp8mE1P03Qs75G39i0XgJpM1XVTfi6cRjrkeD7Iz3raOG2bLhrG/Pq4m9zJHfurHcA0Foa6S3nSxMv8Aktcf317tF6ujKj4vzijkkr10jSuFiLLi1X9IQu74m/wXcdDRbDsO9Tpf2TVxjhnbbFHH51PCfAj3LreA4pBTYfh4lkAcKKl4g2uPwTfRCY5ueFw9ttl3JEUsqkzUOGHPBPS1ORzoXwvp3ubva8Ozt285BPcVz9uOxfjJ29YafcV1jGdIzVNdBHA1zH7CHsErjzWZtAPesRS6ByTbTCIgeV7iP1dp8Ftha1OlRUa6s11rNeJE4ycnqGhNxiE/LH60f8GqXVsDvTgO7zo7nvJC32t0IwmEEVE73yfMiDLg9IINu0ha3VaMUhcdW2QM5M2Uu7coC66eIw89jl/rl4FHGa22MUyojPmvgPU7L7CqVtQwMa3MMz5I7NDy/c4HZdZKHQhsptC17z0NcbdZvYLM4bwUShwe+RkVtoBJeb8+UbP1lZ4jDU2nOpbsf7katSSyiebCfMP5Z9gWWiO5bHQaDxxgCSZ7wORrQzxN1sFFhsEH4KNrT87e79I7V4mK0hSlOUo53OmFGSVmavQ4NUSWOTI3nfxfDf4LOUmBRt2vcXnm80d2/wAVl0Xl1MTOXV6+p0RgkfOONrRZoDRzAWVkRcxcIiIAiIgCIiAIiIAiIgCIilAuiqrKSCUUKVIClQitcGh8MsULqCHXSuiAqmFpbFrCXauTZbMLC19q1Tgw0vgoY5qUQ1VRNLUZ4hFG0lzS1rQCM12nik8u9ddxDDoKloZUQxTMa7MGyMDwHWtcA8tie9faCBkYDY2NY0Cwa1oaAOgBenTx1NYXoJwbzvtt92c0qUnU107HFeFugqpamKpfAYmmkGa722BbLKAMxIu7LlNht27lu+h2E0EtFT1Bl1rdVG2S7wxrJGtAc1wG0EHnKjT7QSTFZ4ZW1TYWxRavIYy/0i4uFiOfwWDoeCOaN1vum9kZILhHE5hP69genau54nD1cLTh0uo1uSb7PtmZdHONRvVubfPpHSUwLKaMOP0W5GdrrXPd2rDy4hX1twwPyH0YwWN7X8vaVsmE6M0tMxjQx0rmi2smdrXk85vsv1BZkcy8vp6UHeEbvizo1JPa7GlUWh8psZZGxj5reO73AeKztHo1SxbSwyO53nN+rsHgswixni6st/0yLKlFFWNDQAAABuAFh3KyqpXMaBQiKAFVEVSQiIgCIiAIiIAiIgCIiAIiIAiIpQLIqolwWUqFCkglWVVKAlFCKQSiqiXBZFCIAiKFAJVVKISFVEVQEREAREQBERAEREAREQBERAEREAREUoH/2Q==')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-screen overflow-auto text-[#c42929]">
        {answer ? (
          <Answer
            searchQuery={searchQuery}
            answer={answer}
            done={done}
            onReset={() => {
              setAnswer("");
              setSearchQuery({ query: "", sourceLinks: [] });
              setDone(false);
            }}
          />
        ) : (
          <Search
            onSearch={setSearchQuery}
            onAnswerUpdate={(value) => setAnswer((prev) => prev + value)}
            onDone={setDone}
          />
        )}
      </div>
    </>
  );
}
