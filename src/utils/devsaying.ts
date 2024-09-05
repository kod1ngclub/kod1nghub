const DEVELOPER_SAYINGS = [
    "리스프는 언어가 아닌, 건축 자재이다.",
    "물 위를 걷는 것과 명세서로 소프트웨어를 개발하는 것은 쉽다. 둘 다  동결되었다면……",
    "그들은 이제 버니같은 버그는 만들지 않는다.",
    "C 프로그램은 막 왁스칠 한 마루에서 면도날을 가진 사람이 빠른 춤을 추는 것과 같다.",
    "난 마이크로소프트가 유닉스 디랙터리 목록에서 보이지 않게 하려고 .Net이라고 이름을 지었다고 생각한다.",
    "코볼을 사용하면 마음이 불구가 된다. 코볼의 가르침은, 따라서, 범죄로 간주해야 한다.",
    "언어의 진화: 포트란은 타입이 없는 언어, C는  약한 타입 언어, 에이다는 강한 타입 언어, C++는 강한 허풍 언어.",
    "PHP는 사소한 해악이며 서투른 아마추어가 저지르고 만들었지만, 펄은 엄청나고 교활한 해악이며 능숙하지만 변태인 전문가가 저질렀다.",
    "펄 – RSA로 암호화하기 전과 후가 동일한 유일한 언어",
    "버클리가 만든 유명한 제품 두 개가 있다. 바로 LSD와 UNIX 다. 우리는 이것이 우연의 일치라고 믿을 수 없다.",
    "IT 회사들은 소프트웨어를 더욱 “사용자 친화적”으로 만들려고 한다. 하지만, 그 중에서 가장 잘한 일은 브로셔에 '사용자 친화적' 이라고 적어놓은거다. ",
    "컴퓨터가 핸드폰과 비슷한 수준까지 쉬워지기를 바랐던 남자가 있었다. 그런데 전화기 사용법이 컴퓨터만큼 어려워지면서 그 소원이 자연스레 이루어지게 되었다.",
    "컴퓨터는 어떤 바보라도 사용할 수 있다. 그래서 많은 사람들이 컴퓨터를 사용한다.",
    "고객을 “유저”라고 부르는 딱 두 개의 산업이 있다. – 마약, IT",
    "코드 수를 기준으로 프로그램 진척도를 측정하는 것은, 무게로 비행기 제작 진척도를 측정하는 것과 같다.",
    "BASIC을 먼저 배운 학생들에게 좋은 프로그래밍 스타일을 가르친다는 건 현실적으로 불가능하다. 그들의 마음은 회복할 수 없는 피해를 입은 것과 같다.",
    "C++ 에서는 스스로 발을 쏘는 행위는 거의 일어나지 않는다. 하지만 그런 일이 일어난다면 다리 전체가 날아가 버릴 거다.",
    "C++ : 여기선 친구들이 당신의 Private Members에 접근할 수 있다. 코딩 농담임.",
    "자바가 정말로 Garbage collection 을 한다면, 대부분의 프로그램들은 실행 중에 자기 자신을 지워버릴지도 모른다."
]

export const devsaying = () => DEVELOPER_SAYINGS[Math.floor(Math.random() * DEVELOPER_SAYINGS.length)]
