import React from "react";
import { IntroBlock } from "./components/IntroBlock";
import { DescriptorsBlock } from "./components/DescriptorsBlock";
import { ProjectsBlock } from "./components/ProjectsBlock";
import { Container } from "./components/Container";

export default async function Home() {
	return (
		<Container>
			<div className="pt-16 min-h-[90vh] px-4">
				<h1 className="text-3xl font-bold mb-4">Why Iz Inglish So Messt Up?</h1>
				<p className="mb-4">
					Hav yoo evur wundurd why Inglish iz so hard too reed? If yoo ar a
					naytiv speekur, yoo probublee don’t evun notis how bizar Inglish
					speling iz. But if yoo ar lerning it az a sekund langwij, yoo no the
					payn uv trying too figyur owt why{" "}
					<span className="font-semibold">thru</span>,{" "}
					<span className="font-semibold">though</span>, and{" "}
					<span className="font-semibold">tough</span> ar speld so differently
					but sownd nuthing alike.
				</p>

				<p className="mb-4">
					Thair iz no reezun why <span className="font-semibold">"read"</span>{" "}
					(past tense) and <span className="font-semibold">"read"</span>{" "}
					(present tense) shood bee speld the saym but pronownst difruntlee. And
					wy duz the "gh" in <span className="font-semibold">"laugh"</span>{" "}
					sownd like "f," but in <span className="font-semibold">"ghost"</span>{" "}
					it sownds like "g"? Who maid up theez roolz? (Anser: A bunch uv dehd
					monx, Fransh peepul, and a handfull uv random printing prezz owunurz.)
				</p>

				<p className="mb-4">
					Eeven wurse, Inglish haz so meny words that sownd the saym but meen
					totalee difrunt things. If yoo{" "}
					<span className="font-semibold">rite</span> a letter with yoor{" "}
					<span className="font-semibold">right</span> hand, yoo dont{" "}
					<span className="font-semibold">write</span> yoor{" "}
					<span className="font-semibold">rights</span> rong, unles yoo ment
					too, wich wood bee <span className="font-semibold">wrong</span>.
					Confyoozd yet? Yea, us too.
				</p>

				<p className="mb-4">
					Sum peepul sai Inglish speling iz{" "}
					<span className="font-semibold">"traditional"</span> or{" "}
					<span className="font-semibold">"historicul,"</span> but let’s bee
					onest—itz just a hot mess. If we speld wurds how they sownd, evrything
					wood bee eezeer. But noooo, we got stuck with a langwij that iz
					esenshully a linguistik thrift shop, full uv stolen wurds, uglee
					speling choises, and sounds that just don’t match thair leturz.
				</p>

				<p className="mb-4">
					Mabe itz time too{" "}
					<span className="font-semibold">reeboot Inglish</span>. Or at leest
					giv us a speling sistem that duznt feel like it wuz desined by a drunk
					time traveeler from ten difrunt centuriez at wuns.
				</p>
			</div>
		</Container>
	);
}
