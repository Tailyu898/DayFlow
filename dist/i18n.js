import {preferences} from './preferences.js';
// Only translate interface literals. User values are interpolated after literal translation.
const rows=`
私人網址可透過行動網路或其他 Wi-Fi 使用，需登入有存取權限的帳號。資料仍保存在目前瀏覽器，不會自動跨裝置同步。首次開啟需要網路，地圖與外部連結仍需連網。|私人网址可通过移动网络或其他 Wi-Fi 使用，需登录有访问权限的账号。数据仍保存在当前浏览器，不会自动跨设备同步。首次打开需要网络，地图与外部链接仍需联网。|Use the private URL over mobile data or any Wi-Fi. Sign in with an authorized account. Data stays in this browser and does not sync across devices. First use, maps and external links need internet.|非公開URLはモバイル回線や別のWi-Fiでも利用できます。権限のあるアカウントでログインしてください。データはブラウザー内に保存され、端末間で自動同期しません。初回表示や地図には通信が必要です。|비공개 URL은 모바일 데이터나 다른 Wi-Fi에서도 사용할 수 있습니다. 권한이 있는 계정으로 로그인하세요. 데이터는 현재 브라우저에 저장되며 기기 간 자동 동기화되지 않습니다. 첫 실행, 지도, 외부 링크에는 인터넷이 필요합니다.
在私人網址下可使用行動網路或其他 Wi-Fi。確認手機登入有權限的帳號並能開啟日序，記錄重新開啟、訊號不佳及離線時的行為。|私人网址可使用移动网络或其他 Wi-Fi。确认手机登录有权限的账号并能打开日序，记录重新打开、信号不佳和离线时的表现。|Use mobile data or another Wi-Fi with the private URL. Check sign-in and loading, then record reopening, weak-signal and offline behavior.|非公開URLをモバイル回線や別のWi-Fiで開き、ログインと表示を確認します。再表示、電波が弱い時、オフライン時の動作を記録してください。|모바일 데이터나 다른 Wi-Fi에서 비공개 URL로 접속하세요. 로그인과 실행을 확인한 뒤 재실행, 약한 신호, 오프라인 동작을 기록하세요.
夜間主色調|夜间主色调|Night accent color|ダークモードのアクセント|야간 모드 강조 색상
經典薄荷|经典薄荷|Classic mint|クラシックミント|클래식 민트
自訂主色|自定义主色|Custom accent|カスタムアクセント|사용자 지정 강조 색상
夜間主色（HEX）|夜间主色（HEX）|Night accent (HEX)|夜間アクセント（HEX）|야간 강조 색상 (HEX)
選擇夜間主色|选择夜间主色|Choose night accent|夜間アクセントを選択|야간 강조 색상 선택
保留深色背景，主色會自動調整為適合夜間閱讀的亮度。|保留深色背景，主色会自动调整为适合夜间阅读的亮度。|Keeps the dark background and adjusts the accent brightness for readable contrast.|暗い背景を保ち、読みやすい明るさにアクセント色を調整します。|어두운 배경을 유지하고 읽기 편한 대비로 강조 색상의 밝기를 조정합니다.
楓葉紅|枫叶红|Maple red|メープルレッド|메이플 레드
暖陽黃|暖阳黄|Sunshine yellow|サンシャインイエロー|햇살 옐로
黑白色調|黑白色调|Monochrome|モノクロ|흑백
自訂布景|自定义主题|Custom theme|カスタムテーマ|사용자 지정 테마
主色（HEX）|主色（HEX）|Primary color (HEX)|メインカラー（HEX）|주 색상 (HEX)
背景色（HEX）|背景色（HEX）|Background color (HEX)|背景色（HEX）|배경색 (HEX)
選擇主色|选择主色|Choose primary color|メインカラーを選択|주 색상 선택
選擇背景色|选择背景色|Choose background color|背景色を選択|배경색 선택
自訂主色與背景色，其他配色與文字對比會自動搭配。|自定义主色与背景色，其他配色和文字对比会自动搭配。|Choose primary and background colors. Other shades and text contrast adjust automatically.|メインカラーと背景色を選ぶと、他の色と文字のコントラストを自動調整します。|주 색상과 배경색을 선택하면 다른 색상과 글자 대비가 자동 조정됩니다.
請輸入六位 HEX 色碼，例如 #246451。|请输入六位 HEX 色码，例如 #246451。|Enter a six-digit HEX color, such as #246451.|#246451 のような6桁のHEXカラーを入力してください。|#246451처럼 6자리 HEX 색상 코드를 입력하세요.
日序 Dayflow|日序 Dayflow|Dayflow|日序 Dayflow|Dayflow
手機試用紀錄|手机试用记录|Mobile trial journal|スマホ試用記録|모바일 체험 기록
一邊試用，一邊記下操作結果。此頁只將紀錄儲存在目前手機瀏覽器，不會自動傳回電腦或錄製螢幕。|边试用边记录操作结果。本页仅将记录保存在当前手机浏览器，不会自动传回电脑或录屏。|Record results as you try the app. This page saves only in this browser; it does not send logs to your computer or record the screen.|試しながら結果を記録しましょう。このブラウザー内にのみ保存し、PCへの自動送信や画面録画はしません。|앱을 사용하며 결과를 기록하세요. 현재 브라우저에만 저장하며 컴퓨터로 자동 전송하거나 화면을 녹화하지 않습니다.
開啟日序|打开日序|Open Dayflow|日序を開く|Dayflow 열기
匯出試用紀錄|导出试用记录|Export trial journal|試用記録を出力|체험 기록 내보내기
手機型號／系統／瀏覽器|手机型号／系统／浏览器|Phone / OS / browser|端末・OS・ブラウザー|휴대폰 / OS / 브라우저
例如：iPhone、iOS、Safari|例如：iPhone、iOS、Safari|e.g. iPhone, iOS, Safari|例：iPhone、iOS、Safari|예: iPhone, iOS, Safari
整體感受與最想改善的三件事|整体感受与最想改进的三件事|Overall impressions and top three improvements|全体の感想と改善したい三つの点|전체 소감 및 개선하고 싶은 세 가지
哪些步驟順暢？哪些地方不好找或需要重複輸入？|哪些步骤顺畅？哪里不好找或需要重复输入？|What went smoothly? What was hard to find or needed repeated input?|使いやすかった点、探しづらい点、繰り返し入力が必要だった点は？|어떤 단계가 편했나요? 찾기 어렵거나 반복 입력이 필요한 곳은 어디인가요?
填寫會自動儲存在本機。完成後請按「匯出試用紀錄」，再將檔案提供給我整理。若切換網址、瀏覽器或清除網站資料，可能看不到原有紀錄。|填写后自动保存在本地。完成后点击「导出试用记录」，再提供文件以便整理。切换网址、浏览器或清除网站数据可能导致原记录不可见。|Entries save automatically on this device. Export the journal when done and share the file for review. Changing the address or browser, or clearing site data, may hide earlier entries.|入力内容は端末に自動保存されます。完了後に記録を出力し、確認用にファイルを共有してください。URLやブラウザーの変更、サイトデータの削除で以前の記録が見えなくなる場合があります。|입력은 기기에 자동 저장됩니다. 완료 후 기록을 내보내 검토할 파일을 공유하세요. 주소나 브라우저를 바꾸거나 사이트 데이터를 삭제하면 이전 기록을 볼 수 없을 수 있습니다.
連線與首頁|连接与首页|Connection & home|接続とホーム|연결 및 홈
連接與電腦相同的 Wi-Fi，開啟日序，確認首頁與行程選單顯示正常。|连接与电脑相同的 Wi-Fi，打开日序，确认首页与行程菜单显示正常。|Connect to the computer's Wi-Fi, open Dayflow and check the home page and plan menu.|PCと同じWi-Fiに接続し、日序のホームと行程メニューを確認します。|컴퓨터와 같은 Wi-Fi에 연결한 후 Dayflow 홈과 일정 메뉴를 확인하세요.
建立日常或工作行程|创建日常或工作行程|Create an everyday or work plan|日常・仕事の行程を作成|일상 또는 업무 일정 만들기
建立兩日行程，加入一個外出活動、一個居家活動或線上會議。|创建两日行程，加入一个外出活动、一个居家活动或线上会议。|Create a two-day plan with an outing and an at-home activity or online meeting.|二日間の行程に、外出と自宅での活動やオンライン会議を追加します。|이틀 일정을 만들고 외출 활동과 집에서 할 활동 또는 온라인 회의를 추가하세요.
調整時間與衝突檢查|调整时间与冲突检查|Time changes & conflicts|時間変更と重複確認|시간 조정 및 충돌 확인
建立兩個重疊活動，確認警告；再調整時間，確認警告解除。|创建两个重叠活动并确认警告；再调整时间，确认警告消失。|Add overlapping activities and check the warning. Adjust times and confirm it clears.|重複する活動で警告を確認し、時刻を変えて警告が消えることを確かめます。|겹치는 활동을 만들어 경고를 확인한 다음 시간을 조정해 경고가 사라지는지 확인하세요.
每日／每週重複|每日／每周重复|Daily / weekly repeats|毎日・毎週の繰り返し|매일 / 매주 반복
在行程日期內建立重複活動，切換日期確認；編輯其中一筆，確認其他筆保留。|在行程日期内创建重复活动，切换日期确认；编辑其中一条，确认其余记录保留。|Create recurring activities, check other dates, then edit one and confirm others stay unchanged.|行程期間内に繰り返し活動を作り、日付を変えて確認します。一件を編集し、他の活動が変わらないことを確かめます。|반복 활동을 만들고 날짜를 바꿔 확인하세요. 하나를 수정한 후 다른 활동이 유지되는지 확인하세요.
為至少兩筆活動填入地址，在地點與路徑頁開啟當日路線，確認地點順序。交通時間需自行填寫。|为至少两条活动填写地址，在地点与路线页打开当日路线，确认地点顺序。交通时间需手动填写。|Add addresses to at least two activities, open the day's route and check stop order. Enter travel times manually.|二件以上に住所を入力し、今日のルートを開いて順序を確認します。移動時間は手動入力です。|두 개 이상 활동에 주소를 입력하고 당일 경로를 열어 장소 순서를 확인하세요. 이동 시간은 직접 입력합니다.
照片、飲食與費用紀錄|照片、饮食与费用记录|Photos, food & expenses|写真・食事・費用の記録|사진, 음식 및 비용 기록
記錄一筆活動的照片、心得、費用及實際時間；重新整理後確認資料仍在。|记录一条活动的照片、感想、费用及实际时间；刷新后确认数据仍在。|Record photos, notes, cost and actual times. Reload and confirm they remain.|写真、感想、費用、実際の時間を記録し、再読み込みして保存を確認します。|사진, 소감, 비용, 실제 시간을 기록한 뒤 새로 고침해 유지되는지 확인하세요.
備份與匯入|备份与导入|Backup & import|バックアップと取り込み|백업 및 가져오기
匯出完整備份，確認手機可找到下載檔；再匯入並確認資料完整。匯入採合併方式，會保留原行程並產生匯入副本。|导出完整备份，确认手机能找到下载文件；再导入确认数据完整。导入采用合并方式，会保留原行程并创建导入副本。|Export a backup and find it in downloads. Import it and check the data. Import keeps the original and adds a copy.|バックアップを出力し、ダウンロード先で確認して取り込みます。元の行程は保持され、コピーが追加されます。|백업을 내보내 다운로드 파일을 찾으세요. 다시 가져와 데이터를 확인하세요. 원본은 유지되고 사본이 추가됩니다.
匯出 .ics 並匯入手機行事曆，確認日期、時間、提醒和通知權限。|导出 .ics 并导入手机日历，确认日期、时间、提醒和通知权限。|Export .ics to your phone calendar and check dates, times, reminders and notification permission.|.ics をスマホのカレンダーに取り込み、日時・通知・通知権限を確認します。|.ics를 휴대폰 캘린더로 가져와 날짜, 시간, 알림 및 알림 권한을 확인하세요.
外出與連線限制|外出与连接限制|Connection limits away from home|外出時の接続制限|외출 및 연결 제한
目前為同 Wi-Fi 本機試用。電腦需保持開機；離開區網後網址無法連線，區網 HTTP 不支援離線重開。記下這項限制對你的使用影響。|当前为同 Wi-Fi 本地试用。电脑需保持开机；离开局域网后无法连接，局域网 HTTP 不支持离线重开。请记录此限制的影响。|This trial needs the same Wi-Fi and a running computer. The LAN address is unreachable outside that network; LAN HTTP cannot restart offline. Note how this affects you.|試用には同じWi-Fiと起動中のPCが必要です。外出先からLANアドレスには接続できず、LAN HTTPではオフライン起動できません。影響を記録してください。|같은 Wi-Fi와 켜진 컴퓨터가 필요합니다. 다른 네트워크에서는 내부 주소에 접속할 수 없고 LAN HTTP는 오프라인 재시작을 지원하지 않습니다. 사용에 미치는 영향을 기록하세요.
整體操作與顯示|整体操作与显示|Overall usability & display|操作性と表示|전체 조작 및 화면
檢查字體、按鈕、橫向溢出、輸入速度與照片選取操作；記下希望改善的地方。|检查字体、按钮、横向溢出、输入速度和照片选择操作；记录希望改进之处。|Check text, buttons, horizontal overflow, input speed and photo selection. Note improvements.|文字、ボタン、横方向のはみ出し、入力速度、写真選択を確認し、改善点を記録します。|글자, 버튼, 가로 넘침, 입력 속도, 사진 선택을 확인하고 개선할 부분을 적어 주세요.
的測試結果|的测试结果| result|のテスト結果| 테스트 결과
測試結果|测试结果|Test result|テスト結果|테스트 결과
操作過程／結果／問題|操作过程／结果／问题|Steps / results / issues|操作・結果・問題|조작 과정 / 결과 / 문제
例如：按下哪個按鈕、預期什麼、實際發生什麼？|例如：点击哪个按钮、预期什么、实际发生了什么？|Which button did you press? What did you expect and what happened?|押したボタン、期待した動作、実際の結果は？|어떤 버튼을 눌렀나요? 예상과 실제 결과는 무엇인가요?
尚未填寫；請完成一個項目後選擇結果。|尚未填写；请完成一项后选择结果。|Not filled in yet. Try an item, then choose a result.|未記入です。項目を試して結果を選んでください。|아직 작성하지 않았습니다. 항목을 테스트하고 결과를 선택하세요.
瀏覽器儲存可能不可用，填寫後請直接匯出。|浏览器存储可能不可用，填写后请直接导出。|Browser storage may be unavailable. Export after filling in.|保存が利用できない可能性があります。記入後すぐに出力してください。|브라우저 저장을 사용할 수 없을 수 있습니다. 작성 후 바로 내보내세요.
已儲存於本機：|已保存在本地：|Saved on device: |端末に保存済み：|기기에 저장됨: 
上次儲存：|上次保存：|Last saved: |前回保存：|마지막 저장: 
更新：|更新：|Updated: |更新：|업데이트: 
尚未測試|尚未测试|Not tested yet|未テスト|아직 테스트하지 않음
待測|待测|Not tested|未テスト|테스트 전
通過|通过|Passed|合格|통과
問題|问题|Issue|問題あり|문제 있음
不適用|不适用|Not applicable|対象外|해당 없음
儲存失敗，請立即匯出紀錄以免遺失。|保存失败，请立即导出记录以免丢失。|Save failed. Export now to avoid losing records.|保存に失敗しました。記録を失わないよう今すぐ出力してください。|저장에 실패했습니다. 기록을 잃지 않도록 지금 내보내세요.
已匯出，請確認手機下載資料夾。|已导出，请查看手机下载文件夹。|Exported. Check your downloads folder.|出力しました。ダウンロード先を確認してください。|내보냈습니다. 다운로드 폴더를 확인하세요.
日序 DAYFLOW|日序 DAYFLOW|Dayflow|日序 DAYFLOW|Dayflow
 分鐘| 分钟| min| 分| 분
已取消|已取消|Canceled|キャンセル済み|취소됨
日序|日序|Dayflow|日序|Dayflow
語言與布景|语言与主题|Language & theme|言語とテーマ|언어 및 테마
顯示語言|显示语言|Display language|表示言語|표시 언어
布景顏色|主题颜色|Color theme|テーマカラー|테마 색상
森林綠|森林绿|Forest green|フォレストグリーン|포레스트 그린
海洋藍|海洋蓝|Ocean blue|オーシャンブルー|오션 블루
薰衣草紫|薰衣草紫|Lavender|ラベンダー|라벤더
玫瑰粉|玫瑰粉|Rose pink|ローズピンク|로즈 핑크
暖沙色|暖沙色|Warm sand|ウォームサンド|따뜻한 모래색
夜間深色|夜间深色|Night mode|ダークモード|다크 모드
選擇立即套用，並儲存在目前瀏覽器。|选择后立即应用，并保存在当前浏览器。|Changes apply immediately and are saved in this browser.|変更はすぐに適用され、このブラウザーに保存されます。|변경 사항은 즉시 적용되며 현재 브라우저에 저장됩니다.
語言設定只調整介面；行程名稱、地點和筆記保留原文。|语言设置仅调整界面；行程名称、地点和笔记保留原文。|Language changes affect the interface. Your trip names, places and notes stay as entered.|言語設定は画面表示に適用されます。行程名、場所、メモは原文のままです。|언어 설정은 화면 표시에만 적용됩니다. 일정 이름, 장소, 메모는 원문을 유지합니다.
無法儲存外觀設定，請確認瀏覽器允許本機儲存。|无法保存外观设置，请确认浏览器允许本地存储。|Could not save preferences. Allow local storage in your browser.|設定を保存できません。ブラウザーのローカル保存を許可してください。|설정을 저장할 수 없습니다. 브라우저의 로컬 저장을 허용해 주세요.
完成|完成|Done|完了|완료
使用與備份|使用与备份|Help & backup|使い方とバックアップ|도움말 및 백업
建立新行程|创建新行程|New plan|新しい行程|새 일정
我的行程|我的行程|My plans|マイプラン|내 일정
安排每一天，|安排每一天，|Plan each day.|毎日を整え、|하루를 계획하고,
留下生活的足跡。|留下生活的足迹。|Keep life's moments.|日々の足跡を残す。|삶의 순간을 남기세요.
本機試用版|本地试用版|Local preview|ローカル試用版|로컬 체험판
本機儲存|本地保存|On-device|端末に保存|기기에 저장
離線中|离线中|Offline|オフライン|오프라인
選擇行程|选择行程|Choose a plan|行程を選択|일정 선택
留一點空間給生活，也為重要的事預留時間。|给生活留一点空间，也为重要的事预留时间。|Make room for life and time for what matters.|暮らしに余白を、大切なことに時間を。|삶의 여유와 중요한 일을 위한 시간을 남겨 두세요.
編輯行程|编辑行程|Edit plan|行程を編集|일정 편집
檢視方式|查看方式|View|表示方法|보기 방식
時間表|时间表|Timeline|タイムライン|시간표
地點與路徑|地点与路线|Places & routes|場所とルート|장소 및 경로
活動紀錄|活动记录|Activity journal|活動記録|활동 기록
前一天|前一天|Previous day|前日|이전 날
後一天|后一天|Next day|翌日|다음 날
檢視日期|查看日期|Viewing date|表示日|조회 날짜
今天的小進展|今天的小进展|Today's progress|今日の進み具合|오늘의 진행 상황
項活動已完成|项活动已完成|activities completed|件完了|개 활동 완료
每完成一件事，都值得給自己一個肯定。|每完成一件事，都值得给自己一个肯定。|Every small step deserves a little credit.|一つ終えるたびに、自分をねぎらいましょう。|하나씩 마칠 때마다 자신을 칭찬해 주세요.
行程檢查|行程检查|Schedule check|スケジュール確認|일정 확인
目前沒有時間衝突。|目前没有时间冲突。|No scheduling conflicts.|時間の重複はありません。|겹치는 일정이 없습니다.
交通時間由你填寫，請預留移動餘裕。|交通时间由你填写，请预留出行余量。|Enter travel times and leave room for delays.|移動時間を入力し、余裕を持たせてください。|이동 시간을 입력하고 여유 시간을 확보하세요.
計畫之外，也有風景。|计划之外，也有风景。|Leave room for discovery.|予定の外にも、楽しみを。|계획 밖의 즐거움도 있어요.
工作、採買、旅遊，或只是好好吃一頓飯。把想做的事放進一天裡。|工作、采购、旅行，或只是好好吃一顿饭。把想做的事安排进一天。|Work, errands, travel or a good meal. Make time for what you want to do.|仕事、買い物、旅行、おいしい食事。やりたいことを一日に。|업무, 장보기, 여행, 맛있는 한 끼까지. 하고 싶은 일을 하루에 담으세요.
匯出行事曆提醒|导出日历提醒|Export calendar|カレンダーに出力|캘린더 내보내기
從第一個安排開始|从第一个安排开始|Start with your first plan|最初の予定を立てましょう|첫 일정을 만들어 보세요
旅遊、工作，或日常的小事，都可以放在這裡。|旅行、工作或日常小事，都可以放在这里。|Trips, work and everyday tasks belong here.|旅行も仕事も日々の用事も、ここに。|여행, 업무, 일상의 작은 일까지 담아 보세요.
建立行程|创建行程|Create a plan|行程を作成|일정 만들기
把每一天，過成自己的步調。|让每一天，都按自己的节奏度过。|Every day, at your own pace.|毎日を、自分のペースで。|매일을 나만의 속도로.
資料僅存於目前瀏覽器；請定期匯出備份。|数据仅保存在当前浏览器；请定期导出备份。|Data stays in this browser. Export backups regularly.|データはこのブラウザーに保存されます。定期的にバックアップしてください。|데이터는 이 브라우저에만 저장됩니다. 정기적으로 백업하세요.
今日活動|今日活动|Today's activities|今日の活動|오늘의 활동
已完成|已完成|Completed|完了済み|완료됨
安排時間|安排时间|Planned time|予定時間|계획 시간
今日花費|今日花费|Today's spending|今日の支出|오늘 지출
小時|小时|hr|時間|시간
項活動|项活动|activities|件の活動|개 활동
項|项|items|件|개
元|元|TWD|元|TWD
今日安排|今日安排|Today's plan|今日の予定|오늘 일정
新增活動|新增活动|Add activity|活動を追加|활동 추가
重複活動|重复活动|Recurring|繰り返し|반복 활동
狀態：|状态：|Status: |状態：|상태: 
分鐘|分钟|min|分|분
已設定座標|已设置坐标|Coordinates set|座標設定済み|좌표 설정됨
線上活動|线上活动|Online activity|オンライン活動|온라인 활동
無須移動|无需出行|No travel|移動なし|이동 없음
提前 |提前 |Before: |事前通知：|미리 알림: 
有時間或交通衝突，請查看行程檢查。|存在时间或交通冲突，请查看行程检查。|Time or travel conflict. See schedule check.|時間または移動の問題があります。スケジュール確認をご覧ください。|시간 또는 이동 충돌이 있습니다. 일정 확인을 확인하세요.
編輯|编辑|Edit|編集|편집
記錄|记录|Record|記録|기록
開啟地圖|打开地图|Open map|地図を開く|지도 열기
活動連結|活动链接|Activity link|活動リンク|활동 링크
前往下一站：交通 |前往下一站：交通 |Next stop: travel |次の場所へ：移動 |다음 장소까지: 이동 
緩衝 |缓冲 |buffer |余裕 |여유 
 分| 分| min| 分| 분
今天還有很多可能。|今天还有很多可能。|Today is full of possibilities.|今日はまだ、いろいろできそう。|오늘은 아직 가능성이 가득해요.
新增活動，開始安排這一天。|新增活动，开始安排这一天。|Add an activity to plan your day.|活動を追加して、一日を計画しましょう。|활동을 추가해 하루를 계획하세요.
把每一站，串成一天|把每一站，串成一天|Connect your day's stops|一日の立ち寄り先をつなぐ|하루의 장소를 연결하세요
新增|新增|Add|追加|추가
依時間順序串接地點；路線與即時交通交由外部地圖提供。|按时间顺序连接地点；路线与实时交通由外部地图提供。|Stops follow your schedule. External maps provide routes and live traffic.|時刻順に場所をつなぎます。ルートと交通情報は外部地図で確認できます。|일정 순서대로 장소를 연결합니다. 경로와 교통 정보는 외부 지도를 이용합니다.
路線交通方式|路线交通方式|Travel mode|移動手段|이동 수단
開啟當日路線|打开当日路线|Open today's route|今日のルートを開く|오늘 경로 열기
地圖需連網。有座標的活動可直接在此預覽；只有地址的活動可開啟地圖搜尋。開啟外部地圖時會傳送所選地點。|地图需要联网。有坐标的活动可在此预览；仅有地址的活动可打开地图搜索。打开外部地图时会发送所选地点。|Maps need internet. Coordinates enable previews; addresses open map search. Opening external maps sends the selected places to that service.|地図には通信が必要です。座標があればプレビュー、住所のみなら地図検索を利用できます。外部地図を開くと選択した場所が送信されます。|지도에는 인터넷이 필요합니다. 좌표가 있으면 미리 보기를, 주소만 있으면 지도 검색을 사용합니다. 외부 지도에 선택한 장소가 전송됩니다.
座標地點|坐标地点|Coordinate location|座標の場所|좌표 위치
的地圖|的地图| map|の地図| 지도
搜尋／導航至此地點|搜索／导航至此地点|Search / navigate here|検索・ここへナビ|검색 / 이 장소로 길찾기
目前沒有地點。|目前没有地点。|No places yet.|場所がありません。|등록된 장소가 없습니다.
編輯活動並填入地址或座標，即可安排路徑。|编辑活动并填写地址或坐标，即可规划路线。|Edit activities and add addresses or coordinates to plan a route.|活動を編集し、住所または座標を入力するとルートを作成できます。|활동을 편집하고 주소 또는 좌표를 입력해 경로를 만드세요.
留住生活的片刻|留住生活的片刻|Keep life's moments|日々のひとこまを残す|일상의 순간을 남기세요
查看整份行程|查看完整行程|Show entire plan|行程全体を表示|전체 일정 보기
費用以新臺幣記錄|费用以新台币记录|Expenses are recorded in TWD|費用は台湾ドルで記録|비용은 대만 달러로 기록됩니다
搜尋活動、地點或筆記|搜索活动、地点或笔记|Search activities, places or notes|活動・場所・メモを検索|활동, 장소, 메모 검색
搜尋紀錄|搜索记录|Search journal|記録を検索|기록 검색
還沒有筆記，記下今天的一點小事吧。|还没有笔记，记下今天的一件小事吧。|No notes yet. Capture a small moment from today.|メモはまだありません。今日の小さな出来事を書いてみましょう。|아직 메모가 없습니다. 오늘의 작은 순간을 남겨 보세요.
實際開始：|实际开始：|Actual start: |実際の開始：|실제 시작: 
實際結束：|实际结束：|Actual end: |実際の終了：|실제 종료: 
的紀錄照片|的记录照片| journal photo|の記録写真| 기록 사진
找不到符合的紀錄。|找不到匹配的记录。|No matching records.|該当する記録はありません。|일치하는 기록이 없습니다.
關閉|关闭|Close|閉じる|닫기
取消|取消|Cancel|キャンセル|취소
儲存|保存|Save|保存|저장
建立新的行程|创建新行程|Create a new plan|新しい行程を作成|새 일정 만들기
行程名稱 *|行程名称 *|Plan name *|行程名 *|일정 이름 *
行程類型|行程类型|Plan type|行程の種類|일정 유형
開始日期 *|开始日期 *|Start date *|開始日 *|시작 날짜 *
結束日期 *|结束日期 *|End date *|終了日 *|종료 날짜 *
行程備註|行程备注|Plan notes|行程メモ|일정 메모
刪除此行程（可還原）|删除此行程（可恢复）|Delete plan (recoverable)|行程を削除（復元可能）|일정 삭제 (복원 가능)
編輯活動|编辑活动|Edit activity|活動を編集|활동 편집
活動名稱 *|活动名称 *|Activity name *|活動名 *|활동 이름 *
日期 *|日期 *|Date *|日付 *|날짜 *
開始時間 *|开始时间 *|Start time *|開始時刻 *|시작 시간 *
停留時間（分鐘）|停留时间（分钟）|Duration (minutes)|所要時間（分）|소요 시간 (분)
活動分類|活动分类|Category|カテゴリー|활동 분류
地點或地址（可留空）|地点或地址（可留空）|Place or address (optional)|場所・住所（任意）|장소 또는 주소 (선택)
交通方式|交通方式|Travel mode|移動手段|이동 수단
目前狀態|当前状态|Current status|現在の状態|현재 상태
抵達此活動的交通時間（分）|到达此活动的交通时间（分钟）|Travel time to this activity (min)|この活動までの移動時間（分）|이 활동까지 이동 시간 (분)
抵達前的緩衝時間（分）|到达前的缓冲时间（分钟）|Arrival buffer (min)|到着前の余裕（分）|도착 전 여유 시간 (분)
行事曆提醒|日历提醒|Calendar reminder|カレンダー通知|캘린더 알림
不提醒|不提醒|No reminder|通知なし|알림 없음
開始時|开始时|At start|開始時|시작 시
提前 5 分鐘|提前 5 分钟|5 minutes before|5分前|5분 전
提前 15 分鐘|提前 15 分钟|15 minutes before|15分前|15분 전
提前 30 分鐘|提前 30 分钟|30 minutes before|30分前|30분 전
提前 1 小時|提前 1 小时|1 hour before|1時間前|1시간 전
提前 1 天|提前 1 天|1 day before|1日前|1일 전
重複安排|重复安排|Repeat|繰り返し|반복 설정
不重複|不重复|Does not repeat|繰り返しなし|반복 안 함
每天|每天|Every day|毎日|매일
每週|每周|Every week|毎週|매주
重複至（限行程範圍內）|重复至（限行程范围内）|Repeat until (within plan dates)|繰り返し終了日（行程期間内）|반복 종료일 (일정 기간 내)
座標與線上活動連結|坐标与线上活动链接|Coordinates & online links|座標とオンラインリンク|좌표 및 온라인 링크
緯度（例如 25.0324）|纬度（例如 25.0324）|Latitude (e.g. 25.0324)|緯度（例：25.0324）|위도 (예: 25.0324)
經度（例如 121.5340）|经度（例如 121.5340）|Longitude (e.g. 121.5340)|経度（例：121.5340）|경도 (예: 121.5340)
活動／視訊會議連結|活动／视频会议链接|Activity / video call link|活動・ビデオ会議リンク|활동 / 화상 회의 링크
座標可省略；填寫後可在地點頁預覽地圖。交通時間先手動填寫。|坐标可省略；填写后可在地点页面预览地图。交通时间先手动填写。|Coordinates are optional and enable map previews. Enter travel times manually.|座標は任意で、入力すると地図を表示できます。移動時間は手動入力です。|좌표는 선택 사항이며 지도 미리 보기에 사용됩니다. 이동 시간은 직접 입력하세요.
筆記|笔记|Notes|メモ|메모
這是重複活動中的一筆，本次修改只影響這一筆。|这是重复活动中的一条，本次修改仅影响此条。|This is one recurring activity. Changes affect only this occurrence.|繰り返し活動の一件です。変更はこの一件のみに適用されます。|반복 활동 중 하나입니다. 변경은 이 활동에만 적용됩니다.
刪除此活動（可還原）|删除此活动（可恢复）|Delete activity (recoverable)|活動を削除（復元可能）|활동 삭제 (복원 가능)
記錄這一刻|记录这一刻|Capture this moment|この瞬間を記録|이 순간 기록하기
預計 |预计 |Planned: |予定：|예정: 
完成狀態|完成状态|Completion status|完了状態|완료 상태
實際花費（新臺幣）|实际花费（新台币）|Actual cost (TWD)|実際の費用（台湾ドル）|실제 비용 (대만 달러)
實際開始時間|实际开始时间|Actual start time|実際の開始日時|실제 시작 시간
實際結束時間|实际结束时间|Actual end time|実際の終了日時|실제 종료 시간
以現在時間填入實際開始|以当前时间填写实际开始|Set actual start to now|実際の開始を現在時刻に設定|현재 시간을 실제 시작으로 설정
筆記／餐點／心得|笔记／餐点／感想|Notes / food / impressions|メモ・食事・感想|메모 / 음식 / 소감
紀錄照片|记录照片|Journal photos|記録写真|기록 사진
每筆最多 6 張；自動縮圖後儲存於此裝置。可於備份檔中一起保存。|每条最多 6 张；自动缩图后保存在此设备。可随备份文件一并保存。|Up to 6 photos per activity. Resized and saved on this device, including in backups.|一件につき6枚まで。縮小して端末に保存し、バックアップにも含めます。|활동당 최대 6장입니다. 크기를 줄여 기기에 저장하며 백업에 포함됩니다.
照片 |照片 |Photo |写真 |사진 
移除照片 |移除照片 |Remove photo |写真を削除 |사진 삭제 
資料留在你的裝置|数据保存在你的设备|Your data stays on your device|データは端末内に保存|데이터는 내 기기에 저장됩니다
行程、筆記與照片使用 IndexedDB 儲存在目前瀏覽器。不同手機、瀏覽器及網址的資料各自獨立；清除網站資料會移除紀錄。請定期下載備份。|行程、笔记与照片使用 IndexedDB 保存在当前浏览器。不同手机、浏览器及网址的数据各自独立；清除网站数据会删除记录。请定期下载备份。|Plans, notes and photos are stored in this browser. Each device, browser and address has separate data. Clearing site data removes records. Back up regularly.|行程、メモ、写真はこのブラウザーに保存されます。端末・ブラウザー・URLごとにデータは別です。サイトデータを消すと記録も消えます。定期的にバックアップしてください。|일정, 메모, 사진은 현재 브라우저에 저장됩니다. 기기, 브라우저, 주소별 데이터는 별개입니다. 사이트 데이터를 삭제하면 기록도 삭제됩니다. 정기적으로 백업하세요.
匯出完整備份|导出完整备份|Export full backup|完全バックアップを出力|전체 백업 내보내기
匯入備份（合併）|导入备份（合并）|Import backup (merge)|バックアップを統合|백업 가져오기 (병합)
提醒與重複活動|提醒与重复活动|Reminders & recurrence|通知と繰り返し|알림 및 반복 활동
App 開啟時會顯示活動提醒。若需要鎖定螢幕或關閉 App 後提醒，請匯出 .ics 並匯入手機行事曆，確認該行事曆允許通知。匯出時間會依目前裝置時區轉換；不會自動同步後續修改。|App 打开时会显示活动提醒。如需锁屏或关闭 App 后提醒，请导出 .ics 并导入手机日历，确认日历允许通知。导出时间根据当前设备时区转换；不会自动同步后续修改。|Reminders appear while the app is open. For lock-screen or closed-app reminders, export .ics to your phone calendar and allow notifications. Export uses this device's time zone; later edits do not sync automatically.|アプリ表示中に通知します。閉じた後の通知は .ics をスマホのカレンダーに取り込み、通知を許可してください。出力は端末のタイムゾーンを使用し、後の編集は自動同期しません。|앱이 열려 있을 때 알림이 표시됩니다. 잠금 화면이나 앱 종료 후 알림은 .ics를 휴대폰 캘린더로 가져오고 알림을 허용하세요. 현재 기기 시간대를 사용하며 이후 수정은 자동 동기화되지 않습니다.
每天／每週重複會建立各自獨立的活動；編輯只影響選取的一筆。路徑以時間順序開啟外部地圖，交通時間需手動填入。|每天／每周重复会创建独立活动；编辑仅影响选中的一条。路线按时间顺序打开外部地图，交通时间需手动填写。|Daily/weekly repeats create independent activities. Edits affect one occurrence. Routes open in external maps in time order. Enter travel times manually.|毎日・毎週の繰り返しは独立した活動を作ります。編集は一件のみに適用されます。ルートは時刻順に外部地図で開き、移動時間は手動入力です。|매일/매주 반복은 독립된 활동을 만듭니다. 수정은 선택한 활동에만 적용됩니다. 경로는 시간순으로 외부 지도에서 열리며 이동 시간은 직접 입력합니다.
手機使用與離線|手机使用与离线|Mobile & offline use|スマホとオフライン利用|모바일 및 오프라인 사용
電腦啟動後，手機可連接相同 Wi-Fi 並開啟電腦的區域網路網址。此方式需保持電腦開機。安裝至主畫面與完整離線快取需要 HTTPS（或本機 localhost）；透過區網 HTTP 使用時不提供離線啟動。地圖與外部連結仍需網路。|电脑启动后，手机可连接相同 Wi-Fi 并打开电脑的局域网网址。此方式需保持电脑开机。安装到主屏幕与完整离线缓存需要 HTTPS（或本机 localhost）；局域网 HTTP 不提供离线启动。地图与外部链接仍需网络。|Connect your phone to the same Wi-Fi and open the computer's LAN address. Keep the computer on. Home-screen installation and offline startup need HTTPS or localhost; LAN HTTP does not support offline startup. Maps and external links need internet.|スマホを同じWi-Fiにつなぎ、PCのLANアドレスを開きます。PCは起動したままにしてください。ホーム画面への追加とオフライン起動にはHTTPSまたはlocalhostが必要です。地図と外部リンクは通信が必要です。|휴대폰을 같은 Wi-Fi에 연결해 컴퓨터의 내부 주소를 여세요. 컴퓨터를 켜 두어야 합니다. 홈 화면 설치와 오프라인 시작에는 HTTPS 또는 localhost가 필요합니다. 지도와 외부 링크에는 인터넷이 필요합니다.
此網址支援離線快取；首次連網載入完成後可離線重開。|此网址支持离线缓存；首次联网加载完成后可离线重开。|This address supports offline caching after the first online load.|初回オンライン読み込み後はオフライン起動が可能です。|처음 온라인으로 불러온 후 오프라인으로 다시 열 수 있습니다.
此網址未啟用離線快取。|此网址未启用离线缓存。|Offline caching is unavailable at this address.|このURLではオフライン保存が利用できません。|이 주소에서는 오프라인 캐시를 사용할 수 없습니다.
回收區|回收站|Trash|ゴミ箱|휴지통
刪除的行程與活動可在這裡還原。|删除的行程与活动可在此恢复。|Restore deleted plans and activities here.|削除した行程と活動を復元できます。|삭제한 일정과 활동을 여기서 복원할 수 있습니다.
還原全部已刪除資料|恢复全部已删除数据|Restore all deleted data|削除データをすべて復元|삭제된 데이터 모두 복원
尚未包含帳號、雲端同步、即時交通與背景推播。|尚不包含账号、云端同步、实时交通与后台推送。|Accounts, cloud sync, live traffic and background push are not included.|アカウント、クラウド同期、リアルタイム交通、バックグラウンド通知は未対応です。|계정, 클라우드 동기화, 실시간 교통, 백그라운드 푸시는 아직 지원하지 않습니다.
日常辦事|日常办事|Errands|日常の用事|일상 용무
旅遊出遊|旅游出游|Travel|旅行|여행
工作拜訪|工作拜访|Work visits|仕事・訪問|업무 방문
就醫安排|就医安排|Medical visits|通院|진료 일정
接送行程|接送行程|Pickups & drop-offs|送迎|픽업 및 배웅
運動休閒|运动休闲|Fitness & leisure|運動・レジャー|운동 및 여가
聚會活動|聚会活动|Gatherings|集まり|모임
自訂|自定义|Custom|カスタム|사용자 지정
待進行|待进行|Planned|予定|예정
延期|延期|Postponed|延期|연기
開車|开车|Driving|車|자동차
步行|步行|Walking|徒歩|도보
自行車|自行车|Cycling|自転車|자전거
大眾運輸|公共交通|Public transit|公共交通|대중교통
一般|一般|General|一般|일반
景點|景点|Sightseeing|観光|관광
飲食|饮食|Food|食事|음식
工作|工作|Work|仕事|업무
採買|采购|Shopping|買い物|장보기
就醫|就医|Medical|通院|진료
接送|接送|Pickup|送迎|픽업
運動|运动|Exercise|運動|운동
聚會|聚会|Meetup|集まり|모임
住宿|住宿|Stay|宿泊|숙박
線上|线上|Online|オンライン|온라인
居家|居家|At home|自宅|집
更新活動狀態|更新活动状态|Update activity status|活動状態を更新|활동 상태 변경
狀態|状态|Status|状態|상태
行程已儲存|行程已保存|Plan saved|行程を保存しました|일정을 저장했습니다
活動已儲存|活动已保存|Activity saved|活動を保存しました|활동을 저장했습니다
紀錄已儲存|记录已保存|Journal saved|記録を保存しました|기록을 저장했습니다
狀態已更新|状态已更新|Status updated|状態を更新しました|상태를 변경했습니다
行程已移至回收區，可在使用與備份還原|行程已移入回收站，可在使用与备份中恢复|Plan moved to Trash. Restore it in Help & backup.|行程をゴミ箱に移動しました。使い方とバックアップから復元できます。|일정을 휴지통으로 이동했습니다. 도움말 및 백업에서 복원할 수 있습니다.
活動已移至回收區|活动已移入回收站|Activity moved to Trash|活動をゴミ箱に移動しました|활동을 휴지통으로 이동했습니다
備份已下載，包含照片與回收區|备份已下载，包含照片与回收站|Backup downloaded, including photos and Trash|写真とゴミ箱を含むバックアップを出力しました|사진 및 휴지통을 포함한 백업을 다운로드했습니다
已還原回收區資料|已恢复回收站数据|Trash restored|ゴミ箱のデータを復元しました|휴지통 데이터를 복원했습니다
每筆最多 6 張照片|每条最多 6 张照片|Up to 6 photos per activity|一件につき写真6枚までです|활동당 사진은 최대 6장입니다
單張照片請小於 20 MB|单张照片请小于 20 MB|Each photo must be under 20 MB|写真は一枚20 MB未満にしてください|사진 한 장은 20 MB 미만이어야 합니다
照片無法讀取：|无法读取照片：|Could not read photo: |写真を読み込めません：|사진을 읽을 수 없습니다: 
無法儲存，請先匯出備份並確認裝置空間：|无法保存，请先导出备份并确认设备空间：|Could not save. Export a backup and check storage: |保存できません。バックアップと端末の空き容量を確認してください：|저장할 수 없습니다. 백업을 내보내고 저장 공간을 확인하세요: 
請確認行程名稱與起訖日期|请确认行程名称与起止日期|Check the plan name and date range|行程名と期間を確認してください|일정 이름과 날짜 범위를 확인하세요
日期範圍必須包含既有活動，請先調整活動日期|日期范围必须包含已有活动，请先调整活动日期|The date range must include existing activities. Adjust them first.|既存の活動を含む期間にしてください。先に活動の日付を変更してください。|기간에 기존 활동이 포함되어야 합니다. 먼저 활동 날짜를 조정하세요.
重複結束日超出行程範圍|重复结束日期超出行程范围|Repeat end date is outside the plan|繰り返し終了日が行程期間外です|반복 종료일이 일정 범위를 벗어납니다
備份檔請小於 100 MB|备份文件请小于 100 MB|Backup must be under 100 MB|バックアップは100 MB未満にしてください|백업 파일은 100 MB 미만이어야 합니다
匯入失敗：|导入失败：|Import failed: |取り込みに失敗：|가져오기 실패: 
至少需要兩個有效地點才能開啟路線|至少需要两个有效地点才能打开路线|Add at least two valid places to open a route|ルートには有効な場所が二つ以上必要です|경로를 열려면 유효한 장소가 두 곳 이상 필요합니다
請將下載的 .ics 匯入手機行事曆並確認提醒|请将下载的 .ics 导入手机日历并确认提醒|Import the downloaded .ics into your phone calendar and check reminders|ダウンロードした .ics をスマホのカレンダーに取り込み、通知を確認してください|다운로드한 .ics를 휴대폰 캘린더로 가져오고 알림을 확인하세요
請選擇行程日期範圍內的日期|请选择行程范围内的日期|Choose a date within the plan|行程期間内の日付を選んでください|일정 범위 내 날짜를 선택하세요
離線快取未啟用；目前仍可在線使用。|离线缓存未启用；目前仍可在线使用。|Offline caching is unavailable. Online use still works.|オフライン保存は無効ですが、オンラインでは利用できます。|오프라인 캐시는 사용할 수 없지만 온라인으로 사용할 수 있습니다.
無法開啟本機儲存|无法打开本地存储|Could not open local storage|ローカル保存を開けません|로컬 저장소를 열 수 없습니다
請使用一般瀏覽模式，並允許網站儲存資料後重新整理。|请使用普通浏览模式，允许网站保存数据后刷新。|Use normal browsing mode, allow site storage, then reload.|通常モードでサイトのデータ保存を許可し、再読み込みしてください。|일반 모드에서 사이트 저장을 허용한 후 새로 고침하세요.
請填寫活動名稱|请填写活动名称|Enter an activity name|活動名を入力してください|활동 이름을 입력하세요
活動日期需在行程日期範圍內|活动日期需在行程日期范围内|Activity date must be within the plan|活動日は行程期間内にしてください|활동 날짜는 일정 기간 내여야 합니다
請填寫正確開始時間|请填写正确开始时间|Enter a valid start time|正しい開始時刻を入力してください|올바른 시작 시간을 입력하세요
活動必須在當日結束；跨日活動請分兩筆|活动必须当天结束；跨日活动请拆成两条|Activities must end the same day. Split overnight activities into two.|活動は当日中に終了してください。日をまたぐ活動は二件に分けてください。|활동은 당일 종료되어야 합니다. 자정을 넘는 활동은 두 개로 나누세요.
活動狀態不正確|活动状态不正确|Invalid activity status|活動の状態が無効です|활동 상태가 올바르지 않습니다
時間與費用必須是非負數字|时间与费用必须是非负数字|Times and costs must be non-negative numbers|時間と費用は0以上の数値にしてください|시간과 비용은 0 이상의 숫자여야 합니다
請同時填寫有效的緯度與經度|请同时填写有效的纬度与经度|Enter both valid latitude and longitude|有効な緯度と経度を両方入力してください|올바른 위도와 경도를 모두 입력하세요
連結需以 https:// 或 http:// 開頭|链接需以 https:// 或 http:// 开头|Links must start with https:// or http://|リンクは https:// または http:// で始めてください|링크는 https:// 또는 http://로 시작해야 합니다
實際時間格式不正確|实际时间格式不正确|Invalid actual time format|実際の日時の形式が無効です|실제 시간 형식이 올바르지 않습니다
實際結束時間不得早於開始時間|实际结束时间不能早于开始时间|Actual end must not precede start|実際の終了は開始より後にしてください|실제 종료는 시작보다 빠를 수 없습니다
重複結束日期不正確|重复结束日期不正确|Invalid repeat end date|繰り返し終了日が無効です|반복 종료일이 올바르지 않습니다
單次最多建立 366 個活動|单次最多创建 366 个活动|Create up to 366 activities at once|一度に作成できる活動は366件までです|한 번에 최대 366개 활동을 만들 수 있습니다
每次路線最多 10 個地點，請分段開啟|每条路线最多 10 个地点，请分段打开|Routes allow up to 10 stops. Split into sections.|ルートは10か所までです。分けて開いてください。|경로당 최대 10개 장소입니다. 나누어 열어 주세요.
不是有效的日序備份檔|不是有效的日序备份文件|Not a valid Dayflow backup|有効な日序バックアップではありません|올바른 Dayflow 백업이 아닙니다
備份中的行程資料不正確|备份中的行程数据不正确|Invalid plans in backup|バックアップの行程が無効です|백업의 일정 데이터가 올바르지 않습니다
備份中的活動關聯不正確|备份中的活动关联不正确|Invalid activity references in backup|バックアップの活動参照が無効です|백업의 활동 연결이 올바르지 않습니다
備份照片格式不正確|备份照片格式不正确|Invalid backup photo format|バックアップ写真の形式が無効です|백업 사진 형식이 올바르지 않습니다
備份設定不正確|备份设置不正确|Invalid backup settings|バックアップ設定が無効です|백업 설정이 올바르지 않습니다
備份欄位格式不正確|备份字段格式不正确|Invalid backup field format|バックアップ項目の形式が無効です|백업 항목 형식이 올바르지 않습니다
儲存被中止|保存已中止|Save was interrupted|保存が中断されました|저장이 중단되었습니다
已建立 |已创建 |Created |作成済み：|생성됨: 
 個重複活動| 个重复活动| recurring activities| 件の繰り返し活動|개 반복 활동
已合併 |已合并 |Merged |統合済み：|병합됨: 
 份行程；保留原有資料| 份行程；保留原数据| plans; existing data kept| 件の行程。既存データは保持されています|개 일정. 기존 데이터는 유지됩니다
活動提醒：|活动提醒：|Reminder: |活動通知：|활동 알림: 
（匯入）|（导入）| (imported)|（取り込み）| (가져옴)
日序備份|日序备份|Dayflow-backup|日序バックアップ|Dayflow-백업
正在開啟日序…|正在打开日序…|Opening Dayflow…|日序を開いています…|Dayflow를 여는 중…
每一天，都有好安排|每一天，都有好安排|A little plan for every day|毎日に、いい予定を|매일을 위한 좋은 계획
與|与|and|と|및
時間重疊|时间重叠|overlap|時間が重複しています|시간이 겹칩니다
前往|前往|Travel to|移動先|이동 목적지
少了 |少了 |Short by |不足：|부족: 
 分鐘交通／緩衝時間| 分钟交通／缓冲时间| minutes of travel / buffer time| 分の移動・余裕時間|분의 이동 / 여유 시간
行程記錄|行程记录|Plan journal|行程の記録|일정 기록
恢復預設|恢复默认|Reset to default|初期設定に戻す|기본값으로 재설정
`.trim().split('\n').map(line=>line.split('|'));
export const messages=Object.fromEntries(rows.map(([key,...values])=>[key,values]));
const index={'zh-Hans':0,en:1,ja:2,ko:3};
export function t(source){const i=index[preferences.language];return i===undefined?source:(messages[source]?.[i]??source);}
const escapeRegex=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const pattern=new RegExp(Object.keys(messages).sort((a,b)=>b.length-a.length).map(escapeRegex).join('|'),'g');
export function ui(source){return preferences.language==='zh-Hant'?source:source.replace(pattern,match=>t(match));}
export function h(parts,...values){return parts.reduce((result,part,i)=>result+ui(part)+(i<values.length?values[i]:''),'');}
