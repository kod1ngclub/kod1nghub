// model and service
import { GetAllMajorServcies } from "@/service/service"
import { GetAllMinorServcies } from "@/service/service"

// components
import Grid from "@/components/grid"
import Flex, { FlexDirection, FlexJustifying} from "@/components/flex"
import Card from "@/components/card"

import { AngryIcon } from "@/components/icon/angry"
import { WindowIcon } from "@/components/icon/window"
import { DocIcon } from "@/components/icon/doc"
import { RefreshIcon } from "@/components/icon/refresh"

// utils
import { NewID } from "@/utils/id"

const About = async () => {
    const majors = await GetAllMajorServcies()
    const minors = await GetAllMinorServcies()

    return (
        <main className="resbody">
            <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Start}>

                <h2 className="typo2 tstyl-center my-3">Why we do this?</h2>

                <Grid>
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <AngryIcon color={null} size={64} />
                        <span className="text tstyl-center">
                            C와 Python으로 <br />
                            분열한 팀원들
                        </span>
                    </Flex>
                
                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <WindowIcon color={null} size={64} />
                        <span className="text tstyl-center">
                            1px만 움직여 달라는 <br />
                            디자이너
                        </span>
                    </Flex>

                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <DocIcon color={null} size={64} />
                        <span className="text tstyl-center">
                            일만 늘리는 <br />
                            기획자
                        </span>
                    </Flex>

                    <Flex direction={FlexDirection.Column} justifying={FlexJustifying.Center}>
                        <RefreshIcon color={null} size={64} />
                        <span className="text tstyl-center">
                            처음으로 돌아오는 <br />
                            프로젝트
                        </span>
                    </Flex>
                </Grid>

                <p className="text my-3 tstyl-center">
                    새 학기가 시작되고 야심찬 마음으로 코딩 동아리에 가입합니다.
                    첫 날부터 기술 스택 선정에 8시간을 태웠습니다.
                    개발자들은 C와 Python으로 나누어서 파벌 전쟁을 벌이고 있습니다.
                    뭐 그게 중요하겠습니까?
                    아무튼 프로젝트는 시작됬습니다.
                    기획자는 오늘도 새로운 기획안을 가져옵니다.
                    젠장, 기획서는 거의 뭐 카카오가 따로 없습니다.
                    1px만 옮겨달라는 디자이너의 울부짖음도 무시할 수는 없겠죠?
                    그렇게 6개월이 흐릅니다.
                    이런! 학기 말이 다가오지만 아무것도 이루어 진게 없습니다.
                    이게 몇 번째 인지 모르겠습니다.
                    <strong className="tstyl-bold">누군가가 이걸 막아줄 수는 없을까요?</strong>
                </p>

                <h2 className="typo2 tstyl-center">How to solve it?</h2>

                <p className="text my-3 tstyl-center">
                    이미 많은 경험이 있는 개발자들이 기술 스택을 대신 정해준다면 어떨까요?
                    기획과 협업을 위한 교육과 프로젝트 툴은 어떨까요?
                    디자이너들이 더 개발자 입장에서 사고할 수 있다면 이 문제가 해결되지 않을까요?
                    
                    <br />

                    그래서 Kod1ngclub은 저희의 서비스를 해결책으로 제시합니다.
                    <strong className="tstyl-bold">이 툴들과 코드는 완전히 무료이며, 라이센스를 준수한다면 일절 개입하지 않습니다.</strong>
                    고민 없이 적용하고 성취해 내세요.
                    두 번째 Kod1ngclub의 등장이 Kod1ngclub의 목표입니다.
                </p>

                <h3 className="typo3 tstyl-italic">우리의 주요 서비스들</h3>

                <Grid>
                    { majors.map(item => ( <Card key={NewID()} title={item.name} description={item.description} link={item.link} /> ))}
                </Grid>

                <h3 className="text tstyl-italic">누군가에게 도움이 될지 모르는 것들</h3>

                <Grid>
                    { minors.map(item => ( <Card key={NewID()} title={item.name} description={item.description} link={item.link} /> ))}
                </Grid>
            </Flex>
        </main>
    )
}

export default About

export const revalidate = 60
