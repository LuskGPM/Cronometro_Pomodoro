import { Table, Ul } from "@/components/Tablelist/Tableslist"
import "./info.css"

export default function InfoPage() {
    return <main className="flex flex-col w-2xl mt-10 self-center text-justify">
        <article>
            <h1> Técnica de Pomodoro </h1>
            <p>A Técnica Pomodoro é um método de gerenciamento de tempo criado por Francesco Cirillo no final dos anos 1980. O objetivo principal é aumentar a produtividade, manter o foco total e evitar a fadiga mental ao dividir o trabalho em blocos de tempo intercalados com pequenas pausas.</p>
            <p>O nome "Pomodoro" (tomate, em italiano) vem do cronômetro de cozinha em formato de tomate que o criador usava durante seus tempos de estudante universitário.</p>
            <h2> Ciclo básico de funcionamento </h2>
            <p className="lead">O modelo tradicional é dividido em passos simples</p>
            <Ul>
                <li><b>Escolha a tarefa:</b> Defina o que você precisa fazer (estudar, escrever, programar).</li>
                <li><b>Cronometre 25 minutos:</b> Trabalhe com foco total na atividade sem interrupções (um "Pomodoro").</li>
                <li><b>Faça uma pausa curta:</b> Quando o alarme tocar, descanse por 5 minutos (levante-se, respire, tome água).</li>
                <li><b>Repita o ciclo:</b> Faça mais três blocos de 25 minutos de trabalho seguidos de 5 minutos de pausa.</li>
                <li><b>Faça uma pausa longa:</b> Após completar 4 ciclos (4 Pomodoros), descanse de 15 a 30 minutos antes de reiniciar.</li>
            </Ul>

            <h2>Como funciona na prática</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Etapa</th>
                        <th>Atividade</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bloco 1</td>
                        <td>Foco na tarefa</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Pausa 1</td>
                        <td>Desncanso curto</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>Bloco 2</td>
                        <td>Foco na tarefa</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Pausa 2</td>
                        <td>Desncanso curto</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>Bloco 3</td>
                        <td>Foco na tarefa</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Pausa 3</td>
                        <td>Desncanso curto</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>Bloco 4</td>
                        <td>Foco na tarefa</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>Pausa 4</td>
                        <td>Desncanso curto</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>Pausa Longa</td>
                        <td>Desncanso completo</td>
                        <td>30 min</td>
                    </tr>
                </tbody>
            </Table>
        </article>
        <article>
            <h2>Boas Práticas</h2>
            <Ul>
                <li><b>Um pomodoro é indivisível:</b> Se você for interrompido no meio de um bloco de 25 minutos, ou você adia a interrupção para tratá-la depois, ou você deve anular aquele Pomodoro e recomeçá-lo do zero.</li>
                <li><b>Pausas são obrigatórias:</b> O descanso não é perda de tempo; é o momento em que o cérebro assimila o que foi feito e recupera a energia necessária para manter a alta performance no próximo ciclo.</li>
            </Ul>

            <h2>Principais Benefícios</h2>
            <Ul>
                <li><b>Combate a procrastinação:</b> Sabendo que você só precisa focar por 25 minutos, fica muito mais fácil começar uma tarefa pesada.</li>
                <li><b>Reduz o cansaço mental:</b> As pausas frequentes mantêm o cérebro fresco durante um longo dia de estudo ou trabalho.</li>
                <li><b>Gera clareza sobre o tempo:</b> Ajuda a entender melhor quanto tempo você realmente leva para concluir determinadas tarefas (por exemplo: "consigo implementar esta funcionalidade em 3 Pomodoros").</li>
            </Ul>
        </article>
    </main>
}