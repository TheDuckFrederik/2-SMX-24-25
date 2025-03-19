# SSH (Secure Shell)

## Què és SSH?

SSH (Secure Shell) és un protocol de xarxa criptogràfic dissenyat per permetre la comunicació segura a través d'una xarxa no segura. S'utilitza principalment per a l'accés remot a sistemes informàtics, permetent a l'usuari controlar un ordinador remot de manera segura i protegida de l'espionatge i la manipulació.

## Com funciona SSH?

SSH funciona establint una connexió segura entre un client i un servidor mitjançant l'ús de criptografia. Quan un client vol connectar-se a un servidor, es realitza una negociació entre ambdós per establir una connexió segura mitjançant claus públiques i privades. Això evita que tercers puguin interceptar la comunicació. La informació que es transmet es xifra per evitar que es pugui llegir.

1. **Autenticació**: El servidor envia una clau pública al client.
2. **Intercanvi de claus**: El client genera una clau simètrica i la xifra amb la clau pública del servidor.
3. **Comunicació segura**: Un cop s'estableix la connexió segura, tota la comunicació entre el client i el servidor es xifra utilitzant una clau simètrica generada prèviament.

## En quines plataformes (S.Os) funciona SSH?

SSH és multiplataforma i funciona en pràcticament tots els sistemes operatius:

- **Linux/Unix** (com Ubuntu, Debian, CentOS)
- **macOS**
- **Windows** (des de Windows 10 i posteriors, on es pot utilitzar el client SSH incorporat o utilitzar aplicacions com PuTTY)
- **Android** (mitjançant aplicacions com JuiceSSH)
- **iOS** (mitjançant aplicacions com Termius)

## Quines capacitats té SSH? (Què permet fer?)

- **Accés remot a servidors**: SSH permet accedir a servidors i gestionar-los de manera remota.
- **Execució de comandes a distància**: El client SSH pot executar comandes en un servidor remot com si fos físicament davant de la màquina.
- **Transferència de fitxers**: Mitjançant SCP (Secure Copy Protocol) o SFTP (SSH File Transfer Protocol), es poden transferir fitxers de manera segura entre el client i el servidor.
- **Túnels SSH**: SSH pot crear "túnels" que permeten encriptar altres tipus de tràfic de xarxa, proporcionant privadesa i seguretat.
- **Reenvio de port**: Permet redirigir ports específics del servidor al client o a altres màquines a través de la connexió SSH.

## Quins límits té SSH?

- **Depèn de la velocitat de la xarxa**: Si la xarxa és molt lenta o poc fiable, SSH pot ser poc efectiu per a connexions remotes a llargues distàncies.
- **Pot ser més lent que altres protocols no encriptats**: La sobrecàrrega de la criptografia pot reduir la velocitat de la connexió.
- **Restricció d'autenticació**: Pot ser més difícil configurar si el servidor només accepta determinats tipus d'autenticació o si es volen restriccions més estrictes de seguretat.

## Quins avantatges té SSH?

- **Seguretat**: SSH utilitza xifratge potent, incloent xifratge simètric i asimètric, per protegir les comunicacions.
- **Integritat de dades**: Detecció de manipulacions en els missatges per garantir que els missatges no han estat modificats.
- **Autenticació**: Utilitza claus públiques i privades per autenticar els usuaris, oferint una seguretat superior a les contrasenyes tradicionals.
- **Facilitat d'ús**: Proporciona una interfície de línia d'ordres senzilla i directa per gestionar servidors remots.

## Quins desavantatges té SSH?

- **Configuració inicial complexa**: Si no es té experiència, la configuració inicial del servidor SSH pot ser complexa, sobretot amb claus i permisos.
- **Rendiment**: El xifratge pot afectar el rendiment en connexions de xarxa de baixa qualitat.
- **Vulnerabilitats si no es gestiona adequadament**: Si no es configuren correctament les claus i les opcions de seguretat, SSH pot ser vulnerable a atacs de força bruta i altres tipus d'explotacions.

## És SSH una eina o un protocol?

SSH és un **protocol** de comunicació segura. No és una eina en sí mateixa, tot i que es pot fer servir amb diverses eines o aplicacions que implementen aquest protocol (com `ssh`, `scp`, `sftp`, etc.).

## En cas de ser un protocol, quina és l'eina més coneguda que l'utilitza?

L'eina més coneguda és la **comanda SSH** utilitzada en un terminal o línia de comandes, que permet establir connexions segures amb altres màquines. També, SCP i SFTP són eines que fan servir el protocol SSH per a la transferència de fitxers.

## Com funciona SSH des de la perspectiva de servidor?

Des del punt de vista del servidor:

1. El servidor SSH escolta a un port (per defecte el port 22) per connexions entrants.
2. Quan un client vol connectar-se, el servidor li envia la seva clau pública.
3. El servidor autentica el client mitjançant una clau pública (en cas d'usar autenticació per clau) o una contrasenya.
4. Si la negociació és satisfactòria, es crea una connexió segura i es permet l'execució de comandes o la transferència de fitxers.

## Com funciona SSH des de la perspectiva de client?

Des del punt de vista del client:

1. El client envia una sol·licitud de connexió al servidor SSH.
2. El client rep la clau pública del servidor i verifica si és de confiança.
3. El client proporciona les seves credencials per autenticar-se (normalment una clau privada, o una contrasenya si no s'utilitza autenticació per clau).
4. Un cop autenticat, el client pot executar comandes de manera remota, transferir fitxers o crear túnels SSH.

## Quins ports utilitza SSH?

De manera predeterminada, **SSH utilitza el port 22** per establir connexions. Tot i això, el port es pot configurar per a qualsevol altre port en el servidor SSH per augmentar la seguretat, evitant l'ús del port per defecte i reduint l'exposició a atacs automatitzats.

