import { Modal, useModal, Button, Text, Grid } from '@nextui-org/react';
import Image from 'next/image';

export default function CardModal({ image_url, description, id }) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Button
        css={{
          color: '#222',
          textTransform: 'uppercase',
          border: '1px solid #222',
          padding: '6px 16px',
          backgroundColor: '#fff',
          borderRadius: '0',
        }}
        auto
        flat
        onPress={() => setVisible(true)}
      >
        View Art Piece
      </Button>
      <Modal
        fullScreen
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        {...bindings}
        noPadding={true}
        autoMargin={false}
      >
        <Modal.Header>
          <Grid.Container gap={2} justify='center'>
            <Grid xs={12} md={11} css={{ border: '1px solid #222222' }}>
              <h1 id='modal-title'>JUDUL</h1>
            </Grid>
            <Grid
              xs={12}
              md={1}
              css={{ border: '1px solid #222222' }}
              justify='center'
            >
              <Button
                light
                css={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  backgroundColor: 'none',
                }}
                onPress={() => setVisible(false)}
              >
                <h1>X</h1>
              </Button>
            </Grid>
          </Grid.Container>
        </Modal.Header>
        <Modal.Body>
          <Grid.Container gap={2} justify='center' css={{ height: '100%' }}>
            <Grid xs={12} md={5} css={{ border: '1px solid #222222' }}>
              <Image
                src={image_url}
                alt={`${id} - ${description}`}
                objectFit='contain'
                width={0}
                height={0}
                style={{ width: '100%', height: '100%' }}
              />
            </Grid>
            <Grid
              xs={12}
              md={7}
              css={{
                border: '1px solid #222222',
                height: '100%',
                overflow: 'scroll',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <h1 id='modal-description'>{description}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur est laborum numquam earum perspiciatis quam dolore
                  expedita deleniti aliquid. Neque excepturi quasi nemo, cumque
                  eos quibusdam voluptatum placeat mollitia ut beatae ipsa
                  voluptatibus id deleniti molestiae, inventore soluta
                  praesentium enim sit! Animi expedita eos vero dolores in est
                  atque molestiae molestias, adipisci perferendis reiciendis
                  totam exercitationem eveniet, esse saepe praesentium
                  doloremque alias dolor nisi distinctio voluptatum officia
                  ipsam optio pariatur. Soluta, itaque similique aliquid et
                  beatae quia aliquam eius voluptatem ex facilis est ratione
                  nemo rerum cumque fugiat perferendis doloremque ipsam dolorum
                  quos sequi expedita, dolor magni debitis. Temporibus corrupti
                  aperiam iste non suscipit blanditiis rem. Inventore, fugit
                  doloribus minus blanditiis ipsa dignissimos officia. Maiores
                  quos aliquam iure ex possimus fugit, ipsa corrupti, voluptatem
                  dicta explicabo ut laboriosam soluta aperiam facere eius nam
                  beatae doloribus, dolores eveniet unde. Veritatis cupiditate
                  odit consectetur magni porro! Minima tempora facere facilis
                  distinctio vel ullam saepe temporibus cupiditate dolores magni
                  delectus hic illum esse, nisi at, enim quae dolorum omnis
                  dignissimos! Corrupti eos nisi atque cumque quod natus nobis
                  ut facere sunt magni, laborum cupiditate nemo impedit quasi,
                  praesentium aut aliquam fugit facilis. Error temporibus,
                  accusantium vel iure sed aut repellendus quisquam consequatur
                  molestiae expedita neque nesciunt tempora culpa eveniet facere
                  magnam similique mollitia minima quae pariatur! Recusandae
                  nulla tempore officiis assumenda nam consequatur? Enim error
                  debitis maxime ipsum praesentium sequi! Dignissimos laudantium
                  consequatur esse modi suscipit eius eveniet illum
                  exercitationem vel fugiat corporis quod soluta alias, maxime
                  quae fuga nisi officiis at. Nulla non deserunt distinctio
                  molestias. Excepturi deleniti quia ea beatae eum sed
                  consectetur consequatur. Doloremque totam similique ducimus
                  architecto delectus cupiditate nesciunt autem vel! Ad
                  eligendi, officiis consectetur nam itaque aut aperiam quos!
                  Omnis mollitia quibusdam, libero iure maxime suscipit natus
                  ipsa eos ullam, ut dicta aliquam vero reiciendis voluptas
                  saepe impedit labore, nesciunt soluta at magni nostrum. Atque
                  laboriosam ab nostrum nulla repellendus hic alias
                  consequuntur! Nam esse dicta sit maiores, autem explicabo
                  debitis, minima earum voluptatum consectetur repellat
                  inventore obcaecati mollitia. Dignissimos quibusdam
                  voluptatibus incidunt non a illo, ratione ipsam asperiores
                  odit laboriosam, magnam odio aliquam quis sed commodi totam
                  architecto. Dolorem, dicta reprehenderit sapiente iusto alias
                  temporibus nesciunt voluptas? Suscipit ut tenetur iusto
                  reprehenderit ab repellat dolorem culpa quasi nisi earum,
                  ipsam voluptas quae laudantium omnis illum nulla quis sunt
                  eius voluptatum dolor tempora delectus ducimus inventore.
                  Officiis quisquam eum deserunt inventore suscipit perspiciatis
                  libero autem. Ab fugiat tempore quod. Pariatur sequi nam ipsam
                  iste dicta. Accusamus at porro alias maxime eos saepe!
                  Temporibus veritatis corrupti ad debitis quaerat. Dolore
                  corporis fugit aliquid maxime aut beatae et molestias a
                  dolorem repudiandae aperiam eaque sapiente eum sit delectus,
                  porro officia error, nesciunt sint nihil, esse velit! Neque
                  quasi expedita possimus cumque, dolor iure tempora impedit
                  hic? Aperiam nesciunt labore voluptatibus. Quod fugit illum
                  sed, commodi quae ullam soluta eligendi! Dolore quaerat sequi
                  blanditiis tempora doloremque dolores dolor? Quo, vero
                  deleniti alias temporibus nisi praesentium quis placeat saepe,
                  mollitia incidunt, atque sunt aperiam eveniet. Reprehenderit
                  suscipit eaque eveniet reiciendis culpa pariatur odit. Placeat
                  delectus quo ut assumenda harum ratione illo cum maxime labore
                  voluptatem consequatur, dolorem similique unde vitae omnis.
                  Neque exercitationem, cupiditate amet nulla alias, iure
                  obcaecati nobis itaque incidunt accusantium accusamus adipisci
                  pariatur nisi voluptatibus optio quas provident cumque. Quis,
                  culpa? Voluptates quaerat eum, fugiat ipsa accusamus inventore
                  vitae aliquam tempore, atque, error impedit earum ducimus
                  ipsum fuga! Exercitationem ad eveniet facilis magni rerum.
                  Inventore, unde voluptatibus? Possimus asperiores ad nulla
                  aspernatur necessitatibus magni, saepe quaerat natus aliquam
                  dicta minima in? Odio quis voluptatum fugiat? Officiis commodi
                  nisi rem delectus? Ratione natus sequi rem molestiae
                  accusantium ducimus veritatis optio dolores laudantium odit
                  laborum modi dignissimos architecto quibusdam ea delectus
                  aliquid dicta minus, quis maiores corporis. Dolore vitae
                  ducimus quam possimus, adipisci neque itaque similique
                  commodi. Neque impedit iure aliquid debitis fuga saepe
                  repudiandae quo doloribus. Pariatur, harum quasi repudiandae
                  vitae, adipisci voluptate fugiat a nostrum ullam iusto vero
                  fuga quod. Quas aliquid accusantium pariatur, natus, suscipit
                  similique ipsa enim nisi fugit minima, perspiciatis ad?
                  Architecto animi adipisci nihil consectetur recusandae?
                  Laborum, dicta quidem cumque officiis aut quaerat consequatur.
                  Quibusdam odit facere aliquam! Vitae, harum error delectus
                  esse rerum ea. Perspiciatis quam pariatur et veritatis ea
                  facilis, alias dolor quo vel molestias culpa omnis. Neque eius
                  voluptate quasi? Dignissimos voluptatum harum dolorum aliquam
                  deserunt perferendis praesentium quasi reprehenderit quis
                  debitis ab expedita culpa assumenda vitae, ea necessitatibus
                  adipisci, dicta labore asperiores nihil iste. Sint quae eos
                  officia quisquam exercitationem velit amet quo ut, deleniti,
                  nam natus a possimus labore ipsam odio tempore accusamus
                  veritatis veniam? Eum consectetur amet similique facere
                  doloremque quaerat iste rerum quibusdam recusandae beatae sed
                  nisi molestiae saepe nesciunt deleniti, modi doloribus
                  voluptates ut nihil minima facilis assumenda velit quasi et.
                  Pariatur, alias quas beatae sapiente in corporis molestiae
                  ipsa culpa ipsam perspiciatis esse sunt nulla? Dolore
                  voluptatibus ut nihil, voluptatum enim tempore quis veniam.
                  Mollitia molestiae culpa quisquam doloribus corporis nobis
                  libero dolorum repellendus deleniti beatae ut asperiores,
                  facilis incidunt officia sunt iure eaque, harum vitae ipsa
                  magni ipsam sapiente! Facere cumque quis vitae dignissimos
                  voluptatibus velit alias nam voluptas placeat commodi dolor,
                  voluptatum saepe non cum. Ullam nemo quae debitis autem illum,
                  eligendi temporibus inventore delectus ut amet deleniti,
                  commodi natus nulla aut placeat? Ratione illum unde totam
                  doloremque iusto facilis cumque enim labore aut dolorem
                  voluptatem voluptate at veniam, ipsam, voluptas ea similique
                  reprehenderit vitae? Tenetur et impedit eos voluptas tempora!
                  Illum rem reiciendis quia facilis labore in veniam praesentium
                  ad? Pariatur praesentium, facere officia atque esse minima
                  rem, aperiam vel temporibus voluptates quisquam placeat quas
                  voluptate itaque totam iure fuga possimus, provident nam.
                  Mollitia minus ducimus earum molestiae odit ex facere!
                  Molestias debitis voluptatem repellat minus consequatur
                  aliquam quo error dolorem enim! Voluptatum totam ipsum
                  repellendus deleniti modi facilis mollitia molestiae laborum
                  praesentium eaque consectetur corrupti facere pariatur nihil
                  aliquid aliquam, perspiciatis cumque harum ex vel iure!
                  Laborum recusandae totam perspiciatis soluta adipisci commodi
                  esse. Molestias voluptate vero libero ullam, sapiente
                  consectetur sequi hic. Reiciendis consequatur nobis
                  consectetur illo sapiente minus veniam nesciunt quisquam,
                  repellat, eveniet suscipit fugiat praesentium soluta rerum
                  odio, accusantium saepe sit vero? Rem expedita odio impedit
                  voluptatibus natus corrupti ut! Esse, similique ipsa repellat
                  hic obcaecati eaque accusamus. A animi quae natus eos quia
                  quaerat distinctio exercitationem minus eius doloribus
                  dignissimos accusamus facere nemo cupiditate omnis, similique,
                  quasi nisi incidunt. Vel officia maxime ipsam eaque
                  consequuntur aspernatur iusto fugit inventore vero, a
                  blanditiis velit tenetur ad, similique odio ut suscipit
                  sapiente quae quidem quo. Officia perspiciatis ut commodi,
                  praesentium tenetur magnam expedita facilis quod odit iste,
                  ducimus necessitatibus soluta neque ad, quisquam eaque
                  temporibus iure fugiat blanditiis. Quae quibusdam iste
                  officiis minima ullam commodi natus quisquam quam quaerat!
                  Corporis totam id libero cumque porro aperiam ipsum aliquam
                  dolorem alias est, autem dolore. Nihil esse neque, animi vero
                  quaerat rerum reprehenderit provident delectus perspiciatis
                  rem reiciendis non, nostrum quos? Commodi dolore, temporibus
                  omnis qui eos amet ipsa id assumenda, inventore, quis
                  molestias blanditiis ipsam aliquid. Doloribus quibusdam culpa
                  facilis, saepe illo eveniet quas beatae nobis voluptatibus
                  doloremque explicabo officia? Quia voluptates est dolorum
                  similique sint ut. Explicabo nostrum illo ducimus excepturi
                  voluptatum autem neque magni nihil placeat exercitationem
                  deserunt tempore quo, illum error incidunt sunt vitae tempora
                  non impedit accusamus hic perspiciatis eligendi! Eius, ut
                  facere, fugiat ipsa laborum iusto dolorem, provident
                  aspernatur sit deleniti quisquam error quo! Hic ut earum ipsa
                  vel magnam quisquam? Aliquam vitae reprehenderit eius sed
                  nobis nam libero reiciendis rerum accusantium? Ab error,
                  magnam, reiciendis fugit quod recusandae voluptatem ea tempore
                  quos dignissimos ratione totam inventore doloremque amet
                  repellat consequatur reprehenderit sequi. Et inventore nihil
                  numquam quod quisquam rem exercitationem distinctio
                  necessitatibus animi officiis, molestiae tenetur doloribus
                  eveniet quo, quaerat magnam laudantium vel illo placeat libero
                  aliquam nemo praesentium nobis? Ex, cumque libero optio, alias
                  officia molestias adipisci et iure enim voluptatibus
                  distinctio modi repudiandae? Ab, officiis. Eum ullam veniam
                  non officiis deserunt! Facilis, porro doloremque earum sed
                  voluptatem, non provident, veritatis cupiditate a laudantium
                  voluptatum officiis laboriosam ipsa repudiandae exercitationem
                  est quas magnam ullam quis ea reprehenderit! Voluptatibus,
                  esse eum? Deleniti quae totam nemo rem. Autem dignissimos
                  quibusdam laboriosam, optio rerum, porro repudiandae
                  consequatur molestias accusamus vero consectetur, dolores
                  ratione nam doloremque qui obcaecati ab. Alias eligendi
                  laborum culpa vel impedit dolor nam aliquam delectus, vero
                  quaerat. Est, sint optio molestias autem, aut pariatur quas
                  sed, facere perferendis tempore fugit voluptas id ea
                  cupiditate. Architecto a eaque explicabo, deserunt dolores
                  eligendi laudantium voluptatum incidunt veniam earum amet
                  impedit adipisci omnis facilis accusantium sint consectetur ad
                  reiciendis et, dolore nulla. Repudiandae consectetur ipsam
                  esse, quibusdam nesciunt, quas porro corporis doloremque quae,
                  numquam iure odit perferendis officiis placeat unde aperiam
                  temporibus minima quidem. Minus est vel accusamus dicta quis
                  saepe quo illum sit necessitatibus incidunt eos at impedit
                  quos aliquid, ipsa dolorum, cupiditate dolorem soluta dolores
                  et autem a nam. Ad veritatis praesentium, obcaecati, porro
                  culpa corrupti repellat quos dolor qui doloremque eaque
                  temporibus voluptas, nihil suscipit similique nemo nisi.
                  Dignissimos rem corrupti animi et eos sint laudantium modi sit
                  cupiditate consequatur unde, accusantium saepe? Eum vitae,
                  quos distinctio dolore omnis esse fugiat dolor autem quod at
                  officiis maxime neque, delectus debitis saepe odit excepturi?
                  Possimus qui nobis, eaque neque maiores quae ea recusandae
                  nesciunt eligendi adipisci sapiente nam molestiae cupiditate
                  quaerat aspernatur repudiandae voluptatem placeat.
                  Necessitatibus, obcaecati at. Pariatur aut eius unde maxime
                  blanditiis deserunt ullam reiciendis rerum sequi eligendi ipsa
                  suscipit molestias, fuga nulla at sint iste vero, dolores
                  recusandae aspernatur. Dolor, necessitatibus possimus
                  laudantium architecto doloremque aliquid voluptatibus nihil
                  assumenda animi nulla tempora nemo sint eius recusandae enim
                  expedita. Nobis sint aliquid necessitatibus qui blanditiis
                  dicta non iste, debitis, velit vel quis pariatur unde quae
                  eligendi praesentium laborum explicabo ex? Nesciunt at quasi,
                  ab cupiditate illum distinctio maxime quis tempora? Deleniti
                  quos et magnam, omnis sint perspiciatis laborum exercitationem
                  reiciendis? Nesciunt nemo reiciendis sint excepturi provident
                  temporibus. Quasi soluta autem itaque harum nobis porro
                  commodi odio doloribus cumque, non accusantium quas eum, hic
                  voluptate quis perferendis nemo ab dolore. Excepturi quisquam
                  inventore incidunt officiis delectus atque voluptates beatae
                  quidem dolorum vel aliquam hic, eum suscipit molestias
                  temporibus unde! Ea fugit maiores, commodi fugiat maxime ipsum
                  dolorem ab fuga, non beatae tenetur numquam accusamus sed.
                  Dolore quo quae facilis possimus eius labore unde ullam soluta
                  quis rerum quod exercitationem, sed consequatur error
                  provident molestiae veritatis repellendus, voluptas molestias
                  doloremque in, aut non. Blanditiis architecto amet aliquid
                  rerum sequi delectus voluptates, eligendi mollitia nisi,
                  exercitationem, placeat eius magnam distinctio cum ea
                  aspernatur. Harum repudiandae blanditiis porro ipsa vero
                  itaque, fugit provident iure accusamus est a nesciunt
                  assumenda earum voluptatum veritatis accusantium quidem quae
                  maxime minima rerum dolores aliquid magni. Est eius laboriosam
                  consequatur? Quam amet voluptas at similique tempore beatae
                  animi minima alias odio saepe laudantium pariatur nobis ipsa
                  nam cum excepturi dicta maiores, architecto harum. Eveniet
                  voluptatum quibusdam modi maiores! Illo iste accusamus, id
                  quos sunt magnam fugiat dicta possimus reiciendis itaque error
                  omnis officiis enim tempore inventore saepe! Ipsam esse optio,
                  officia, quos doloremque dicta, cupiditate laboriosam ut hic
                  harum mollitia natus impedit vitae! Nulla, ex. Hic et
                  distinctio accusamus. Excepturi, ipsa animi? Dolorem id, ut
                  quisquam fugiat velit numquam! Velit tempora nulla quos,
                  quaerat hic, neque dicta amet laborum veritatis in beatae
                  obcaecati cumque veniam dolore perferendis quis non facere rem
                  illum. Quam aspernatur, odio exercitationem, sapiente velit
                  corrupti itaque alias praesentium modi, repudiandae deleniti
                  libero! Tempora neque eius corrupti quis doloremque quaerat
                  dignissimos officiis. Ut voluptatibus aperiam facilis ullam
                  quibusdam temporibus adipisci voluptate obcaecati sunt minus
                  consectetur in sapiente libero officiis fuga blanditiis culpa
                  repellendus, vero laboriosam excepturi veniam dolorum
                  molestias illum. Exercitationem esse praesentium nihil quidem
                  et labore officia pariatur eos necessitatibus. Vero
                  repudiandae totam, aspernatur quae possimus cumque cum
                  explicabo! Sed earum saepe fugiat velit a id animi voluptates
                  neque consequuntur molestias repellendus dolor maxime aliquid
                  ut, aut numquam dolores molestiae perspiciatis aliquam
                  assumenda. Earum ullam, inventore corporis quis dolore debitis
                  pariatur deleniti perferendis accusantium similique? Eveniet,
                  beatae! Reprehenderit minima, recusandae ratione sint
                  assumenda vero sapiente eligendi est itaque aperiam numquam
                  incidunt? Nostrum officiis ea excepturi sint minima.
                </p>
              </div>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Grid.Container gap={2} justify='center'>
            <Grid xs={12} md={6} css={{ border: '1px solid #222222' }}>
              <Button flat auto color='error' onPress={() => setVisible(false)}>
                Close
              </Button>
            </Grid>
            <Grid xs={12} md={6} css={{ border: '1px solid #222222' }}>
              <Button onPress={() => setVisible(false)}>LIKE</Button>
            </Grid>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
